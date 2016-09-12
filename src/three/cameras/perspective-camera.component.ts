import { Directive, Input } from '@angular/core';
import * as THREE from 'three';

@Directive({ selector: 'three-perspective-camera' })
export class PerspectiveCameraComponent {

  @Input() positions = [0, 0, 0];

  camera: THREE.PerspectiveCamera;

  ngOnInit() {
    this.camera = new THREE.PerspectiveCamera(
      35, // Field of view
      800 / 600, // Aspect ratio
      0.1, // Near plane
      10000 // Far plane
    );

    this.camera.position.set(
      this.positions[0],
      this.positions[1],
      this.positions[2]);
  }

  lookAt(scene) {
    this.camera.lookAt(scene.position);
  }

}
