import * as THREE from 'three';
export declare class SkyboxComponent {
    static assets: string[];
    manager: THREE.LoadingManager;
    objects: any[];
    ngOnInit(): void;
    createTexture(texture: any, material: any): (image: any) => void;
    createPlaceholder(): HTMLCanvasElement;
    attachScene(scene: any): void;
}
