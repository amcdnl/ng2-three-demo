import { Directive, Input } from '@angular/core';

import * as THREE from 'three';
import 'three/examples/js/controls/VRControls.js';
import 'three/examples/js/effects/VREffect.js';
import 'webvr-polyfill';

@Directive({ selector: 'three-vr-controls' })
export class VRControlsComponent {

  @Input() height: number;
  @Input() width: number;

  vrDisplay: any;
  controls: THREE.VRControls;
  effect: THREE.VREffect;

  constructor() {
    navigator.getVRDisplays().then((displays) => {
      if (displays.length) {
        this.vrDisplay = displays[0];
      }
    });
  }

  ngOnChanges(changes) {
    const widthChng = changes.width && changes.width.currentValue;
    const heightChng = changes.height && changes.height.currentValue;
    if(widthChng || heightChng) {
      this.setEffectSize(this.width, this.height);
    }
  }

  setupControls(camera, renderer) {
    this.controls = new THREE.VRControls(camera);
    this.effect = new THREE.VREffect(renderer);
    this.setEffectSize(this.width, this.height);
  }

  updateControls(scene, camera) {
    this.controls.update();
    this.effect.render(scene, camera);
  }

  setEffectSize(width, height) {
    if(this.effect) {
      this.effect.setSize(width, height);
    }
  }

  requestVR(dom) {
    this.vrDisplay.requestPresent([{
      source: dom
    }]);
  }

  resetVR() {
    this.vrDisplay.resetPose();
  }

}
