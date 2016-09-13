import { Directive, Input } from '@angular/core';
import * as THREE from 'three';

@Directive({ selector: 'three-perspective-camera' })
export class PerspectiveCameraComponent {

  @Input() height: number;
  @Input() width: number;
  @Input() positions = [0, 0, 0];

  camera: THREE.PerspectiveCamera;

  ngOnInit() {
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000);

    this.camera.position.set(
      this.positions[0],
      this.positions[1],
      this.positions[2]);
  }

  lookAt(scene) {
    this.camera.lookAt(scene.position);
  }

  ngOnChanges(changes) {
    const widthChng = changes.width && changes.width.currentValue;
    const heightChng = changes.height && changes.height.currentValue;

    if(widthChng || heightChng) {
      this.updateAspect(this.width / this.height);
    }
  }

  updateAspect(ratio) {
    if(this.camera) {
      this.camera.aspect = ratio;
      this.camera.updateProjectionMatrix();
    }
  }

}
