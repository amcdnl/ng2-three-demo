import { Directive, ContentChild, ContentChildren } from '@angular/core';
import * as THREE from 'three';

import { PerspectiveCameraComponent } from './cameras/perspective-camera.component';
import { PointLightComponent } from './lights/point-light.component';
import { SphereComponent } from './objects/sphere.component';
import { TextureComponent } from './objects/texture.component';

@Directive({ selector: 'three-scene' })
export class SceneComponent {

  @ContentChild(PerspectiveCameraComponent) cameraComp: any;
  @ContentChildren(PointLightComponent) lightComps: any;
  @ContentChildren(SphereComponent) sphereComps: any;
  @ContentChildren(TextureComponent) textureComps: any;

  scene: THREE.Scene = new THREE.Scene();

  get camera() {
    return this.cameraComp.camera;
  }

  ngAfterContentInit() {
    this.camera.lookAt(this.scene.position);
    this.scene.add(this.camera);

    this.lightComps.forEach((lightComp) => {
      this.scene.add(lightComp.light);
    });

    this.sphereComps.forEach((sphereComp) => {
      this.scene.add(sphereComp.object);
    });
  }

}
