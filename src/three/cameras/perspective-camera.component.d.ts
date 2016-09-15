import * as THREE from 'three';
export declare class PerspectiveCameraComponent {
    height: number;
    width: number;
    positions: number[];
    viewAngle: number;
    near: number;
    far: number;
    camera: THREE.PerspectiveCamera;
    readonly aspect: number;
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    updateAspect(ratio: any): void;
}
