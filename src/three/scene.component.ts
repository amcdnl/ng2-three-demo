import { Directive, ContentChild, ContentChildren } from '@angular/core';
import * as THREE from 'three';

import { PerspectiveCameraComponent } from './cameras/perspective-camera.component';
import { PointLightComponent } from './lights/point-light.component';

@Directive({ selector: 'three-scene' })
export class SceneComponent {

  @ContentChild(PerspectiveCameraComponent) cameraComp: PerspectiveCameraComponent;
  @ContentChildren(PointLightComponent) lightComps: any;

  scene: THREE.Scene = new THREE.Scene();

  get camera() {
    return this.cameraComp.camera;
  }

  ngOnInit() {
    let geometry = new THREE.BoxGeometry(5, 5, 5);
    let material = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
    let mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);
  }

  ngAfterContentInit() {
    this.cameraComp.lookAt(this.scene);

    this.lightComps.forEach((lightComp) => {
      this.scene.add(lightComp.light);
    });
  }

}
