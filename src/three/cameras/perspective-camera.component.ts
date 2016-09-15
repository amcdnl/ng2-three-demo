import { Directive, Input } from '@angular/core';
import * as THREE from 'three';

@Directive({ selector: 'three-perspective-camera' })
export class PerspectiveCameraComponent {

  @Input() height: number;
  @Input() width: number;
  @Input() positions = [0, 0, 0];

  viewAngle: number = 75;
  near: number = 0.1;
  far: number = 10000;
  camera: THREE.PerspectiveCamera;

  get aspect(): number {
    return this.height / this.width;
  }

  ngOnInit() {
    this.camera = new THREE.PerspectiveCamera(
      this.viewAngle,
      this.aspect,
      this.near,
      this.far);

    this.camera.position.set(
      this.positions[0],
      this.positions[1],
      this.positions[2]);
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
