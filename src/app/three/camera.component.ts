import { Directive, Input } from '@angular/core';
import * as THREE from 'three';

@Directive({ selector: 'three-camera' })
export class CameraComponent {

  @Input() scene: THREE.Scene;

  camera: THREE.PerspectiveCamera;

  ngOnInit() {
    this.camera = new THREE.PerspectiveCamera(
      35, // Field of view
      800 / 600, // Aspect ratio
      0.1, // Near plane
      10000 // Far plane
    );

    this.camera.position.set(-15, 10, 10);
    this.camera.lookAt(this.scene.position);
  }

}
