import { Component } from '@angular/core';

import { VoiceService } from './services/voice.service';
import { MusicService } from './services/music.service';
import './app.scss';

@Component({
  selector: 'app',
  template: `
    <div>
      <header>
        <h1>
          ng2-three-vr-demo
          <small>{{feedback}}</small>
        </h1>
        <nav>
          <button
            type="button"
            (click)="musicSvc.search('Brantley Gilbert')">
            Play
          </button>
          <button
            type="button"
            *ngIf="musicSvc.playing"
            (click)="musicSvc.stop()">
            Stop
          </button>
          <button
            type="button"
            (click)="isFullScreen = !isFullScreen">
            Full Screen
          </button>
          <button
            type="button"
            (click)="isVRMode = !isVRMode">
            VR Mode
          </button>
        </nav>
      </header>
      <main>
        <three
          [isVRMode]="isVRMode"
          [isFullScreen]="isFullScreen"
          [ngModel]="audioData"
          [image]="image">
        </three>
      </main>
    </div>
  `
})
export class AppComponent {

  image: any;
  audioData: any;
  isFullScreen: boolean = false;
  isVRMode: boolean = false;
  feedback: string = '';

  constructor(private voiceSvc: VoiceService, private musicSvc: MusicService) {
    this.voiceSvc.onCommand.subscribe((event) => {
      if(event.type === 'play') this.musicSvc.search(event.value);
      if(event.type === 'stop') this.musicSvc.stop();
    });

    this.musicSvc.onPlay.subscribe(({ track, audio }) => {
      this.feedback = `Playing "${track.name}" by ${track.artist}`;
      this.audioData = audio;
      this.image = track.album;
    });
  }

}
