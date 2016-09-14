import { Directive, Input } from '@angular/core';
import * as THREE from 'three';

@Directive({ selector: 'three-texture' })
export class TextureComponent {

  @Input() texture: string;
  @Input() boxWidth: number = 5;

  object: THREE.Mesh;

  objects = [];
  manager = new THREE.LoadingManager();

  ngOnInit() {
    let loader = new THREE.ImageLoader(this.manager);

    if(this.texture) {
      /*
      let geometry = new THREE.BoxGeometry(
        this.boxWidth,
        this.boxWidth,
        this.boxWidth);

      loader.load(this.texture, this.createTexture(texture, material));
      */
    }
  }

  createTexture(texture, material) {
    return function(image) {
      texture.image = image;
      texture.needsUpdate = true;
    }
  }

  attachScene(scene) {
    this.manager.onLoad = () => {
      /*
      let material = new THREE.MeshBasicMaterial({
        map: texture,
        color: 0x01BE00,
        side: THREE.BackSide
      });

      this.object = new THREE.Mesh(geometry, material);
      */
    };
  }

}
