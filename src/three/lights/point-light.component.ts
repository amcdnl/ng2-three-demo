import { Directive, Input } from '@angular/core';
import * as THREE from 'three';

@Directive({ selector: 'three-point-light' })
export class PointLightComponent {

  @Input() color: string = '#FFFF00';
  @Input() position: number[] = [10, 0, 10];

  light: THREE.PointLight;

  ngOnInit() {
    this.light = new THREE.PointLight(this.color);
    this.setPosition(this.position);
  }

  ngOnChanges(changes) {
    if(changes.position && changes.position.currentValue) {
      this.setPosition(this.position);
    }
  }

  setPosition(position) {
    this.light.position.set(
      position[0],
      position[1],
      position[2]);
  }

}
