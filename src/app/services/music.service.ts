import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MusicService {

  playing: boolean = false;
  analyser: any;

  audio = new Audio();
  audioContext = new AudioContext();
  onPlay = new EventEmitter();

  createContext() {
    this.analyser = this.audioContext.createAnalyser();
    let source = this.audioContext.createMediaElementSource(this.audio);
    source.connect(this.analyser);

    this.analyser.connect(this.audioContext.destination);
    this.analyser.fftSize = 256;

    let frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteTimeDomainData(frequencyData);
  }

  search(query) {
    let req = new XMLHttpRequest();
    req.open('GET',`https://api.spotify.com/v1/search?q=${query}&type=track`, true);
    req.send();

    req.onreadystatechange = () => {
      if(req.readyState === XMLHttpRequest.DONE && req.status === 200) {
        this.stop();

        const response = JSON.parse(req.responseText);
        if (response.tracks.items.length) {
          const track = response.tracks.items[0];
          this.play(track);
        }
      }
    };
  }

  play(track) {
    // stupid...
    this.audio.pause();
    this.audio.currentTime = 0;

    // setup new play
    this.audio.src = track.preview_url;
    this.audio.crossOrigin = 'anonymous';
    this.audio.play();

    this.createContext();

    this.onPlay.emit({
      track: {
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.images[1].url,
        url: track.preview_url
      },
      audio: {
        audio: this.audio,
        context: this.audioContext,
        analyser: this.analyser
      }
    });

    this.playing = true;
    setTimeout(() => {
      this.playing = false;
    }, 30000);
  }

  stop() {
    this.audio.pause();
    this.playing = false;
  }

}
