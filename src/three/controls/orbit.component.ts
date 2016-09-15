import { Directive, Input } from '@angular/core';

import * as THREE from 'three';
import 'three/examples/js/controls/OrbitControls.js';

@Directive({ selector: 'three-orbit-controls' })
export class OrbitControlsComponent {

  @Input() enabled: boolean = true;

  controls: THREE.OrbitControls;

  setupControls(camera, renderer) {
    this.controls = new THREE.OrbitControls(camera, renderer.domElement);
    this.controls.enabled = this.enabled;
  }

  updateControls(scene, camera) {
    this.controls.update();
  }

}
