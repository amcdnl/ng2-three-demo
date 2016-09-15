import { Directive, ContentChild, ContentChildren } from '@angular/core';
import * as THREE from 'three';

import { PerspectiveCameraComponent } from './cameras/perspective-camera.component';
import { PointLightComponent } from './lights/point-light.component';

import { SphereComponent } from './objects/sphere.component';
import { TextureComponent } from './objects/texture.component';
import { SkyboxComponent } from './objects/skybox.component';

@Directive({ selector: 'three-scene' })
export class SceneComponent {

  @ContentChild(PerspectiveCameraComponent) cameraComp: any;
  @ContentChildren(PointLightComponent) lightComps: any;

  @ContentChildren(SphereComponent) sphereComps: any;
  @ContentChildren(TextureComponent) textureComps: any;
  @ContentChild(SkyboxComponent) skyboxComp: any;

  scene: THREE.Scene = new THREE.Scene();

  get camera() {
    return this.cameraComp.camera;
  }

  ngAfterContentInit() {
    this.camera.lookAt(this.scene.position);
    this.scene.add(this.camera);

    const meshes = [
      this.skyboxComp,
      ...this.lightComps.toArray(),
      ...this.sphereComps.toArray(),
      ...this.textureComps.toArray()
    ];

    for(let mesh of meshes) {
      if(mesh.object) {
        this.scene.add(mesh.object);
      } else if(mesh.attachScene) {
        mesh.attachScene(this.scene);
      }
    }
  }

}
