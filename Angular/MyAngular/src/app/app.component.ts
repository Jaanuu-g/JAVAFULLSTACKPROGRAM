import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  flag : boolean;
  vehicles : string[];
  selectedVehicle : string = " ";

  constructor() {
    this.flag = true;
    this.vehicles= {"twoWheeler","threeWheeler","fourWheeler"};
  }

changeFlag() {
  this.flag = ! this.flag;
}
setSelectedItem(vec : string) {
  this.selectedVehicle = vec;
}
}