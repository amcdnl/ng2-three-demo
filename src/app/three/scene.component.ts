import { Directive, ContentChild } from '@angular/core';
import * as THREE from 'three';

import { CameraComponent } from './camera.component';

@Directive({ selector: 'three-scene' })
export class SceneComponent {

  @ContentChild(CameraComponent) cameraComp: CameraComponent;

  scene: THREE.Scene = new THREE.Scene();

  get camera() {
    return this.cameraComp.camera;
  }

  ngOnInit() {
    let geometry = new THREE.BoxGeometry(5, 5, 5);
    let material = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
    let mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);

    let light = new THREE.PointLight(0xFFFF00);
    light.position.set(10, 0, 10);
    this.scene.add(light);
  }

}
