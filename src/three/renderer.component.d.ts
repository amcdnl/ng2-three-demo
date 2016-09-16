import { ElementRef } from '@angular/core';
import * as THREE from 'three';
import { SceneComponent } from './scene.component';
import { VRControlsComponent } from './controls/vr.component';
import { OrbitControlsComponent } from './controls/orbit.component';
export declare class RendererComponent {
    private element;
    height: number;
    width: number;
    isVRMode: boolean;
    sceneComp: SceneComponent;
    vrComponent: VRControlsComponent;
    orbitComponent: OrbitControlsComponent;
    renderer: THREE.WebGLRenderer;
    readonly scene: THREE.Scene;
    readonly camera: any;
    constructor(element: ElementRef);
    ngOnChanges(changes: any): void;
    ngAfterContentInit(): void;
    render(): void;
}
