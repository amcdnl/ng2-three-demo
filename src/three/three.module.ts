import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Basic
import { ThreeComponent } from './three.component';
import { RendererComponent } from './renderer.component';
import { SceneComponent } from './scene.component';

// Cameras
import { PerspectiveCameraComponent } from './cameras/perspective-camera.component';

// Lights
import { PointLightComponent } from './lights/point-light.component';

@NgModule({
  declarations: [
    ThreeComponent,
    RendererComponent,
    SceneComponent,
    PerspectiveCameraComponent,
    PointLightComponent
  ],
  imports: [BrowserModule],
  exports: [ThreeComponent]
})
export class ThreeModule { }
