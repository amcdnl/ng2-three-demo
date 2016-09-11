import { Directive, ElementRef, Input, ContentChild } from '@angular/core';
import * as THREE from 'three';

import { SceneComponent } from './scene.component';

@Directive({ selector: 'three-renderer' })
export class RendererComponent {
  
  @Input() rHeight: number = 800;
  @Input() rWidth: number = 800;

  @ContentChild(SceneComponent) sceneComp: SceneComponent;

  renderer: THREE.WebGLRenderer;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.renderer = new THREE.WebGLRenderer({ 
      alpha: true 
    });
  }

  ngAfterContentInit() {
    this.renderer.setSize(this.rHeight, this.rWidth);
    this.element.nativeElement.appendChild(this.renderer.domElement);

    this.renderer.setClearColor(0x000000, 0);
    this.renderer.render(this.sceneComp.scene, this.sceneComp.camera);
  }

}
