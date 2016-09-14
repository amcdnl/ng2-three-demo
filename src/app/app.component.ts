import {
  Component,
  trigger,
  transition,
  animate,
  style,
  state
} from '@angular/core';

import { VoiceService } from './services/voice.service';
import { MusicService } from './services/music.service';
import './app.scss';

@Component({
  selector: 'app',
  template: `
    <main>
      <header [@searchTransition]="feedback ? 'active' : 'inactive'">
        <h1>
          <span *ngIf="!feedback">Say "Play Luke Bryan" to hear a song...</span>
          <span *ngIf="feedback">{{feedback}}</span>
        </h1>
      </header>
      <nav>
        <button
          type="button"
          (click)="musicSvc.search('Luke Bryan')">
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
      <three
        [isVRMode]="isVRMode"
        [isFullScreen]="isFullScreen"
        [ngModel]="audioData"
        [image]="image">
      </three>
    </main>
  `,
  animations: [
    trigger('searchTransition', [
      state('active', style({ top: '10%' })),
      state('inactive', style({ top: '50%' })),
      transition('* => active', [
        animate('200ms ease-in')
      ]),
      transition('* => inactive', [
        animate('200ms ease-out')
      ])
    ])
  ]
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
