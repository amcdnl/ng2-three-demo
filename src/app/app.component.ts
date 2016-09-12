import { Component } from '@angular/core';

import { VoiceService } from './services/voice.service';
import { MusicService } from './services/music.service';
import './app.scss';

@Component({
  selector: 'app',
  template: `
    <div>
      <header>
        <h1>ng2-three-vr-demo</h1>
        <span>{{feedback}}</span>
        <button
          type="button"
          (click)="musicSvc.play('Brantley Gilbert')">
          Play Brantley Gilbert
        </button>
        <button
          type="button"
          *ngIf="musicSvc.playing"
          (click)="musicSvc.stop()">
          Stop
        </button>
      </header>
      <main>
        <three
          [height]="height"
          [width]="width"
          [ngModel]="data">
        </three>
      </main>
    </div>
  `
})
export class AppComponent {

  feedback: string = '';

  height: number = window.innerHeight - 50;
  width: number = window.innerWidth;

  data: any[] = [
    { name: 'bar' },
    { name: 'cat' }
  ];

  constructor(private voiceSvc: VoiceService, private musicSvc: MusicService) {
    this.voiceSvc.onCommand.subscribe((event) => {
      if(event.type === 'play') this.musicSvc.play(event.value);
      if(event.type === 'stop') this.musicSvc.stop();
    });

    this.musicSvc.onPlay.subscribe(({ name, artist, album }) => {
      this.feedback = `Playing ${name} by ${artist}`;
    });
  }

}
