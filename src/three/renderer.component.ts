import { Directive, ElementRef, Input, ContentChild } from '@angular/core';
import * as THREE from 'three';

import { SceneComponent } from './scene.component';
import { VRControlsComponent } from './controls/vr.component';
import { requestFullScreen } from './utils/fullscreen';

@Directive({ selector: 'three-renderer' })
export class RendererComponent {

  @Input() height: number;
  @Input() width: number;
  @Input() isFullScreen: boolean = false;
  @Input() isVRMode: boolean = false;

  @ContentChild(SceneComponent) sceneComp: SceneComponent;
  @ContentChild(VRControlsComponent) vrComponent: VRControlsComponent;

  renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
    alpha: true
  });

  get scene() {
    return this.sceneComp.scene;
  }

  get camera() {
    return this.sceneComp.camera;
  }

  constructor(private element: ElementRef) {
  }

  ngOnChanges(changes) {
    if(changes.isFullScreen && changes.isFullScreen.currentValue) {
      requestFullScreen(this.renderer.domElement);
    }

    if(changes.isVRMode && changes.isVRMode.currentValue) {
      if(!this.isFullScreen) this.isFullScreen = true;
      if(this.vrComponent) this.vrComponent.requestVR(this.renderer.domElement);
    }
  }

  ngAfterContentInit() {
    this.renderer.setSize(this.width, this.height);
    this.element.nativeElement.appendChild(this.renderer.domElement);

    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(Math.floor(window.devicePixelRatio));

    if(this.vrComponent) {
      // this.vrComponent.setupControls(this.camera, this.renderer);
    }

    this.render();
  }

  render() {
    if(this.vrComponent) {
      // this.vrComponent.updateControls(this.scene, this.camera);
    }

    this.renderer.render(this.scene, this.camera);
    // requestAnimationFrame(() => this.render());
  }

}
