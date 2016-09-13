import { Input, Component, HostListener } from '@angular/core';

@Component({
  selector: 'three',
  template: `
    <three-renderer
      [isFullScreen]="isFullScreen"
      [isVRMode]="isVRMode"
      [height]="height"
      [width]="width">

      <three-scene>
        <three-perspective-camera
          [height]="height"
          [width]="width"
          [positions]="[-600, 0, 0]">
        </three-perspective-camera>

        <three-vr-controls
          [height]="height"
          [width]="width">
        </three-vr-controls>

        <three-point-light></three-point-light>

        <three-sphere></three-sphere>

        <three-texture
          [texture]="image">
        </three-texture>

      </three-scene>
    </three-renderer>
  `
})
export class ThreeComponent {

  @Input() ngModel: any;
  @Input() image: any;

  @Input() height: number;
  @Input() width: number;
  @Input() isFullScreen: boolean = false;
  @Input() isVRMode: boolean = false;

  ngOnInit() {
    this.resetWidthHeight();
  }

  ngOnChanges(changes) {
    console.log('changes', changes)

    if(changes.ngModel && changes.ngModel.currentValue) {
    }
  }

  @HostListener('window.resize')
  @HostListener('window.vrdisplaypresentchange')
  resetWidthHeight() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }

}
