import { EventEmitter } from '@angular/core';
export declare class VoiceService {
    annyang: any;
    onCommand: EventEmitter<{}>;
    commands: {
        'play *song': (song: any) => void;
        'stop': () => void;
    };
    constructor();
}
