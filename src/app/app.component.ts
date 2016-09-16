import {
  Component,
  trigger,
  transition,
  animate,
  style,
  state,
  ElementRef
} from '@angular/core';

import { VoiceService } from './services/voice.service';
import { MusicService } from './services/music.service';
import { requestFullScreen } from '../utils/fullscreen';
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
          title="Play Music"
          (click)="musicSvc.search('Luke Bryan')">
          <i class="icon-playback-play"></i>
        </button>
        <button
          type="button"
          title="Stop Music"
          *ngIf="musicSvc.playing"
          (click)="musicSvc.stop()">
          <i class="icon-stop"></i>
        </button>
        <button
          type="button"
          title="Full Screen Toggle"
          (click)="toggleFullScreen()">
          <i class="icon-ic-zoom-out-map-black-24px"></i>
        </button>
        <button
          title="VR Toggle"
          type="button"
          (click)="isVRMode = !isVRMode">
          <i class="icon-google-cardboard"></i>
        </button>
      </nav>
      <three
        [isVRMode]="isVRMode"
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
  supportsVR: boolean = false;

  getVRSupport(): void {
    if(navigator.getVRDisplays === undefined || navigator.getVRDevices === undefined) {
      this.supportsVR = false;
      this.isVRMode = false;
      return;
    }

    navigator.getVRDisplays().then((displays) => {
      if(displays.length) {
        this.supportsVR = true;
        this.isVRMode = true;
      }
    });
  }

  constructor(private voiceSvc: VoiceService,
              private musicSvc: MusicService,
              private element: ElementRef) {
    this.getVRSupport();

    this.voiceSvc.onCommand.subscribe((event) => {
      if(event.type === 'play') this.musicSvc.search(event.value);
      if(event.type === 'stop') this.musicSvc.stop();
    });

    this.musicSvc.onPlay.subscribe(({ track, audio }) => {
      this.feedback = `Playing "${track.name}" by ${track.artist}`;
      this.audioData = audio;
      this.image = track.album;
      this.voiceSvc.annyang.abort();
    });
  }

  toggleFullScreen(changes) {
    this.isFullScreen = !this.isFullScreen;

    if(!this.isFullScreen) {
      requestFullScreen(this.element.nativeElement);
    }
  }

}
