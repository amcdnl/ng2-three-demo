import 'webvr-polyfill';
import 'three/examples/js/controls/VRControls.js';
import 'three/examples/js/effects/VREffect.js';
export declare class VRControlsComponent {
    height: number;
    width: number;
    enabled: boolean;
    controls: any;
    effect: any;
    ngOnChanges(changes: any): void;
    setupControls(camera: any, renderer: any): void;
    updateControls(scene: any, camera: any): void;
    setEffectSize(width: any, height: any): void;
    requestVR(dom: any): void;
    resetVR(): void;
}
