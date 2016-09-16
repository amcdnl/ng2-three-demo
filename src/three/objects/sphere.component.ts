import { Directive, Input } from '@angular/core';
import * as THREE from 'three';

@Directive({ selector: 'three-sphere' })
export class SphereComponent {

  object: THREE.Mesh;

  ngOnInit() {
    // Create sphere
    let geometry = new THREE.SphereGeometry(3, 250, 250);
    let material = new THREE.MeshNormalMaterial();
    let sphere = new THREE.Mesh(geometry, material);

    this.object = sphere;
  }

}
