import { EventEmitter } from '@angular/core';
export declare class VoiceService {
    onCommand: EventEmitter<{}>;
    commands: {
        'play *song': (song: any) => void;
        'stop': () => void;
    };
    constructor();
}
