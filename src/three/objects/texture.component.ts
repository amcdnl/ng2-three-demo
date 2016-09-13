import { Directive, Input } from '@angular/core';
import * as THREE from 'three';

@Directive({ selector: 'three-texture' })
export class TextureComponent {

  @Input() texture: any;

  ngOnInit() {
    let loader = new THREE.TextureLoader();
    loader.load(this.texture, this.onTextureLoaded.bind(this));
  }

  onTextureLoaded(texture) {
    console.log('text', texture)
  }

}
