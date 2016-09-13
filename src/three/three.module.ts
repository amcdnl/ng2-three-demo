import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ThreeComponent } from './three.component';
import { RendererComponent } from './renderer.component';
import { SceneComponent } from './scene.component';

import { PerspectiveCameraComponent } from './cameras/perspective-camera.component';
import { PointLightComponent } from './lights/point-light.component';
import { VRControlsComponent } from './controls/vr.component';
import { SphereComponent } from './objects/sphere.component';
import { TextureComponent } from './objects/texture.component';


@NgModule({
  declarations: [
    ThreeComponent,
    RendererComponent,
    SceneComponent,
    PerspectiveCameraComponent,
    PointLightComponent,
    SphereComponent,
    VRControlsComponent,
    TextureComponent
  ],
  imports: [BrowserModule],
  exports: [ThreeComponent]
})
export class ThreeModule { }
