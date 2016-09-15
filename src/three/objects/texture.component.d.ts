import * as THREE from 'three';
export declare class TextureComponent {
    texture: string;
    boxWidth: number;
    object: THREE.Mesh;
    objects: any[];
    manager: THREE.LoadingManager;
    ngOnInit(): void;
    createTexture(texture: any, material: any): (image: any) => void;
    attachScene(scene: any): void;
}
