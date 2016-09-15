import * as THREE from 'three';
export declare class PointLightComponent {
    color: string;
    position: number[];
    object: THREE.PointLight;
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    setPosition(position: any): void;
}
