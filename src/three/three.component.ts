import { Input, Component } from '@angular/core';

@Component({
  selector: 'three',
  template: `
    <three-renderer
      [height]="height"
      [width]="width">
      <three-scene>
        <three-perspective-camera
          [positions]="[-15, 10, 10]">
        </three-perspective-camera>
        <three-point-light
          [color]="'#FFFFFF'">
        </three-point-light>
      </three-scene>
    </three-renderer>
  `
})
export class ThreeComponent {

  @Input() height: number;
  @Input() width: number;
  @Input() ngModel: any;

}
