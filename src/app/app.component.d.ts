import { VoiceService } from './services/voice.service';
import { MusicService } from './services/music.service';
import './app.scss';
export declare class AppComponent {
    private voiceSvc;
    private musicSvc;
    image: any;
    audioData: any;
    isFullScreen: boolean;
    isVRMode: boolean;
    feedback: string;
    constructor(voiceSvc: VoiceService, musicSvc: MusicService);
}
