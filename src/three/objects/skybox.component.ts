import { Directive, Input } from '@angular/core';
import * as THREE from 'three';

@Directive({ selector: 'three-skybox' })
export class SkyboxComponent {

  static assets = [
    'assets/skyrt.jpg',
    'assets/skylf.jpg',
    'assets/skyup.jpg',
    'assets/skydn.jpg',
    'assets/skybk.jpg',
    'assets/skyft.jpg'
  ];

  manager = new THREE.LoadingManager();
  objects = [];

  ngOnInit() {
    let placeholder = this.createPlaceholder();

    for(const asset of SkyboxComponent.assets) {
  		let texture = new THREE.Texture(placeholder);
  		let material = new THREE.MeshBasicMaterial({ map: texture, overdraw: 0.5 });
  		let loader = new THREE.ImageLoader(this.manager);

  		this.objects.push(material);
  		loader.load(`${asset}`, this.createTexture(texture, material));
  	}

    this.manager.onProgress = (item, loaded, total) => { };
  }

  createTexture(texture, material) {
    return function(image) {
      texture.image = image;
      texture.needsUpdate = true;
    }
  }

  createPlaceholder() {
    let texture = document.createElement('canvas');
  	texture.width = 128;
  	texture.height = 128;

  	let context = texture.getContext( '2d' );
  	context.fillStyle = 'rgb(0,0,0)';
  	context.fillRect(0, 0, texture.width, texture.height);

    return texture;
  }

  attachScene(scene) {
    this.manager.onLoad = () => {
      let box = new THREE.BoxGeometry(300, 300, 300, 7, 7, 7);
      let material = new THREE.MeshFaceMaterial(this.objects);
  		let mesh = new THREE.Mesh(box, material);
  		mesh.scale.x = - 1;
  		scene.add(mesh);
    };
  }

}
