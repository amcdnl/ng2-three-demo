import { Directive, ElementRef, Input, ContentChild, ViewChild } from '@angular/core';
import * as THREE from 'three';

import { SceneComponent } from './scene.component';
import { VRControlsComponent } from './controls/vr.component';
import { OrbitControlsComponent } from './controls/orbit.component';

@Directive({ selector: 'three-renderer' })
export class RendererComponent {

  @Input() height: number;
  @Input() width: number;
  @Input() isVRMode: boolean = false;

  @ContentChild(SceneComponent) sceneComp: SceneComponent;
  @ContentChild(VRControlsComponent) vrComponent: VRControlsComponent;
  @ContentChild(OrbitControlsComponent) orbitComponent: OrbitControlsComponent;

  renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
    antialias: true
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
    if(changes.isVRMode && changes.isVRMode.currentValue) {
      if(this.vrComponent) {
        if(!this.vrComponent.controls) {
          this.vrComponent.enabled = true;
          this.vrComponent.setupControls(this.camera, this.renderer);
        }

        this.vrComponent.requestVR(this.renderer.domElement);
      }
    }

    const widthChng = changes.width && changes.width.currentValue;
    const heightChng = changes.height && changes.height.currentValue;
    if(widthChng || heightChng) {
      this.renderer.setSize(this.width, this.height);
    }
  }

  ngAfterContentInit() {
    this.renderer.setSize(this.width, this.height);
    this.element.nativeElement.appendChild(this.renderer.domElement);
    this.renderer.setPixelRatio(Math.floor(window.devicePixelRatio));

    if(this.orbitComponent) {
      this.orbitComponent.setupControls(this.camera, this.renderer);
    }

    if(this.vrComponent) {
      this.vrComponent.setupControls(this.camera, this.renderer);
    }

    this.render();
  }

  render() {
    if(this.vrComponent) {
      this.vrComponent.updateControls(this.scene, this.camera);
    }

    if(this.orbitComponent) {
      this.orbitComponent.updateControls(this.scene, this.camera);
    }

    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(() => this.render());
  }

}
