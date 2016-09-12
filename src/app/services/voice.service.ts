import { Injectable, EventEmitter } from '@angular/core';
import * as annyang from 'annyang';

@Injectable()
export class VoiceService {

  onCommand = new EventEmitter();

  commands = {
    'play *song': (song) => {
      console.log('Recieved', song);
      this.onCommand.emit({
        type: 'play',
        value: song
      });
    },
    'stop': () => {
      this.onCommand.emit({
        type: 'stop'
      });
    }
  };

  constructor() {
    annyang.addCommands(this.commands);

    annyang.addCallback('error', () => {
      console.warn('Error!');
    });

    annyang.start();
  }

}
