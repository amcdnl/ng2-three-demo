import { Injectable, EventEmitter } from '@angular/core';
import * as annyang from 'annyang';

@Injectable()
export class VoiceService {

  annyang: any;
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
    // set a pointer
    this.annyang = annyang;

    // add your commands
    annyang.addCommands(this.commands);

    // if there is an error, just stop
    annyang.addCallback('error', () => {
      console.warn('Error!');
      annyang.abort();
    });

    // lets kick off by default
    annyang.start();
  }

}
