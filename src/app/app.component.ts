import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(){
    this.shuffle()
  }
  title = 'app';
  colors = ['Red', 'AliceBlue', 'Orange', 'Coral', 'Blue', 'DimGray','DarkGreen','Lime','Magenta','Yellow']
  shuffle(){
    for(let i = 0; i<this.colors.length;i++){
      let swap = (Math.floor(Math.random()*11)+1)
      let temp = this.colors[i]
      this.colors[i] = this.colors[swap]
      this.colors[swap] = temp
    }
    console.log(this.colors)
    return this.colors
  }

}
