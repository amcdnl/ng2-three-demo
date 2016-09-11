import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ThreeComponent } from './three.component';
import { RendererComponent } from './renderer.component';
import { SceneComponent } from './scene.component';
import { CameraComponent } from './camera.component';

@NgModule({
  declarations: [
    ThreeComponent,
    RendererComponent,
    SceneComponent,
    CameraComponent
  ],
  imports: [BrowserModule],
  exports: [ThreeComponent]
})
export class ThreeModule { }
