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
    //this.cameraComp.lookAt(this.scene);

    this.lightComps.forEach((lightComp) => {
      // this.scene.add(lightComp.light);
    });

    let geometry = new THREE.BoxGeometry(5, 5, 5);
    let material = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
    let mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);

    this.sphereComps.forEach((sphereComp) => {
      // this.scene.add(sphereComp.object);
    });

    let light = new THREE.PointLight(0xFFFF00);
    light.position.set(10, 0, 10);
    this.scene.add(light);
  }

}
