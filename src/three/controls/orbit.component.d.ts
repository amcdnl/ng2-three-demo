import * as THREE from 'three';
import 'three/examples/js/controls/OrbitControls.js';
export declare class OrbitControlsComponent {
    enabled: boolean;
    controls: THREE.OrbitControls;
    setupControls(camera: any, renderer: any): void;
    updateControls(scene: any, camera: any): void;
}
