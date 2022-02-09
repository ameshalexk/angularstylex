import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public color: string = "";
  public font: number = 20;
  public bold: boolean = false;
  public italics: boolean = false;

  public fontStyles: object = {
    color: this.color,
    fontSize: this.font,
    bold: this.bold
  }
  toggleBold(): void {
    console.log(this.bold)
    this.bold = !this.bold;
  }
  toggleItalics(): void {
    console.log(this.italics)
    this.italics = !this.italics;
  }

}
