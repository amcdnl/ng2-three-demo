import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MusicService {

  onPlay = new EventEmitter();

  playing: boolean = false;
  audio = new Audio();
  audioContext = new AudioContext();

  /*
  createContext() {
    context = new (window.AudioContext || window.webkitAudioContext),
    analyser = context.createAnalyser(),
    source = context.createMediaElementSource(player);

    source.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 256;
    frequencyData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteTimeDomainData(frequencyData);
  }
  */

  play(query) {
    let req = new XMLHttpRequest();
    req.open('GET',`https://api.spotify.com/v1/search?q=${query}&type=track`, true);
    req.send();

    req.onreadystatechange = () => {
      if(req.readyState === XMLHttpRequest.DONE && req.status === 200) {
        const response = JSON.parse(req.responseText);
        if (response.tracks.items.length) {

          const track = response.tracks.items[0];
          this.audio.src = track.preview_url;
          this.audio.play();
          this.playing = true;

          this.onPlay.emit({
            name: track.name,
            arist: track.artists[0].name,
            album: track.album.images[1].url,
            url: track.preview_url
          });

          setTimeout(() => {
            this.playing = false;
          }, 30000);
        }
      }
    };
  }

  stop() {
    this.audio.pause();
    this.playing = false;
  }

}
