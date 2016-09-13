import { Directive, Input } from '@angular/core';
import * as THREE from 'three';

@Directive({ selector: 'three-texture' })
export class TextureComponent {

  @Input() texture: string = 'https://i.scdn.co/image/7199df74bb15de17f72704c79d482851c0cf4c38';
  @Input() boxWidth: number = 5;

  object: THREE.Mesh;
  loader = new THREE.TextureLoader();

  ngOnInit() {
    if(this.texture) {
      this.loader.load(this.texture, this.onTextureLoaded.bind(this));
    }
  }

  onTextureLoaded(texture) {
    console.log('Loaded Texture', texture);

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(this.boxWidth, this.boxWidth);

    let geometry = new THREE.BoxGeometry(
      this.boxWidth,
      this.boxWidth,
      this.boxWidth);

    let material = new THREE.MeshBasicMaterial({
      map: texture,
      color: 0x01BE00,
      side: THREE.BackSide
    });

    this.object = new THREE.Mesh(geometry, material);
  }

}
