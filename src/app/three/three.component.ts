import { Component, ElementRef, ViewChild } from '@angular/core';

import { RendererComponent } from './renderer.component';
import { SceneComponent } from './scene.component';
import { CameraComponent } from './camera.component';

@Component({
  selector: 'three',
  template: `
    <three-renderer
      [rHeight]="height"
      [rWidth]="width">
      <three-scene>
        <three-camera 
          [scene]="sceneComp.scene">
        </three-camera>
      </three-scene>
    </three-renderer>
  `
})
export class ThreeComponent {

  height: number;
  width: number;

  @ViewChild(RendererComponent) rendererComp: RendererComponent;
  @ViewChild(SceneComponent) sceneComp: SceneComponent;
  @ViewChild(CameraComponent) cameraComp: CameraComponent;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    const bounds = this.element.nativeElement.getBoundingClientRect();
    this.height = bounds.height;
    this.width = bounds.width;
  }

}
