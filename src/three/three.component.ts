import { Input, Component, HostListener } from '@angular/core';

@Component({
  selector: 'three',
  template: `
    <three-renderer
      [isFullScreen]="isFullScreen"
      [isVRMode]="isVRMode"
      [height]="height"
      [width]="width">

      <three-orbit-controls>
      </three-orbit-controls>

      <three-vr-controls
        *ngIf="isVRMode"
        [height]="height"
        [width]="width">
      </three-vr-controls>

      <three-scene>
        <three-perspective-camera
          [height]="height"
          [width]="width"
          [positions]="[-50, 0, 0]">
        </three-perspective-camera>

        <three-point-light></three-point-light>
        <three-sphere></three-sphere>
        <three-skybox></three-skybox>

        <three-texture
          [texture]="image">
        </three-texture>

      </three-scene>
    </three-renderer>
  `
})
export class ThreeComponent {

  @Input() ngModel: any;
  @Input() image: any = 'https://i.scdn.co/image/7199df74bb15de17f72704c79d482851c0cf4c38';

  @Input() height: number;
  @Input() width: number;
  @Input() isFullScreen: boolean = false;
  @Input() isVRMode: boolean = false;

  ngOnInit() {
    this.resetWidthHeight();
  }

  ngOnChanges(changes) {
    if(changes.ngModel && changes.ngModel.currentValue) {
      console.log('changes', changes)
    }
  }

  @HostListener('window.resize')
  @HostListener('window.vrdisplaypresentchange')
  resetWidthHeight() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }

}
