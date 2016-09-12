import { Directive, Input } from '@angular/core';
import * as THREE from 'three';

@Directive({ selector: 'three-point-light' })
export class PointLightComponent {

  @Input() color: string = '#FFFF00';

  light: THREE.PointLight;

  ngOnInit() {
    this.light = new THREE.PointLight(this.color);
    this.light.position.set(10, 0, 10);
  }

}
