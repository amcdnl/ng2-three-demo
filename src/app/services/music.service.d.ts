import { EventEmitter } from '@angular/core';
export declare class MusicService {
    playing: boolean;
    analyser: any;
    audio: HTMLAudioElement;
    audioContext: AudioContext;
    onPlay: EventEmitter<{}>;
    createContext(): void;
    search(query: any): void;
    play(track: any): void;
    stop(): void;
}
