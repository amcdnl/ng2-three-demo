import { Directive, ContentChild, ContentChildren } from '@angular/core';
import * as THREE from 'three';

import { PerspectiveCameraComponent } from './cameras/perspective-camera.component';
import { PointLightComponent } from './lights/point-light.component';
import { SphereComponent } from './objects/sphere.component';

@Directive({ selector: 'three-scene' })
export class SceneComponent {

  @ContentChild(PerspectiveCameraComponent) cameraComp: any;
  @ContentChildren(PointLightComponent) lightComps: any;
  @ContentChildren(SphereComponent) sphereComps: any;

  scene: THREE.Scene;

  get camera() {
    return this.cameraComp.camera;
  }

  ngOnInit() {
    this.scene = new THREE.Scene();

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

    this.sphereComps.forEach((sphereComp) => {
      this.scene.add(sphereComp.object);
      console.log('adding', sphereComp.object)
    });
  }

}
