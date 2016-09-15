import * as THREE from 'three';
export declare class SceneComponent {
    cameraComp: any;
    lightComps: any;
    sphereComps: any;
    textureComps: any;
    skyboxComp: any;
    scene: THREE.Scene;
    readonly camera: any;
    ngAfterContentInit(): void;
}
