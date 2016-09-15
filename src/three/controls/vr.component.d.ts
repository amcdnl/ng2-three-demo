import * as THREE from 'three';
import 'three/examples/js/controls/VRControls.js';
import 'three/examples/js/effects/VREffect.js';
import 'webvr-polyfill';
export declare class VRControlsComponent {
    height: number;
    width: number;
    enabled: boolean;
    vrDisplay: any;
    controls: THREE.VRControls;
    effect: THREE.VREffect;
    constructor();
    ngOnChanges(changes: any): void;
    setupControls(camera: any, renderer: any): void;
    updateControls(scene: any, camera: any): void;
    setEffectSize(width: any, height: any): void;
    requestVR(dom: any): void;
    resetVR(): void;
}
