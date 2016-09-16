import { Input, Component, HostListener } from '@angular/core';

@Component({
  selector: 'three',
  template: `
    <three-renderer
      [isVRMode]="isVRMode"
      [height]="height"
      [width]="width">

      <three-orbit-controls
        [enabled]="!isVRMode">
      </three-orbit-controls>

      <three-vr-controls
        [enabled]="isVRMode"
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

      </three-scene>
    </three-renderer>
  `
})
export class ThreeComponent {

  @Input() ngModel: any;
  @Input() image: any;

  @Input() height: number;
  @Input() width: number;
  @Input() isVRMode: boolean = true;

  ngOnInit() {
    this.resetWidthHeight();
  }

  ngOnChanges(changes) {
    if(changes.ngModel && changes.ngModel.currentValue) {
      console.log('changes', changes);
    }
  }

  @HostListener('window:resize')
  @HostListener('window:vrdisplaypresentchange')
  resetWidthHeight() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    console.log('window resize', this.height, this.width);
  }

}
