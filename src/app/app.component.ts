import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colors = ['Red', 'AliceBlue', 'AntiqueWhite', 'Coral', 'Blue', 'DimGray','DarkGreen','Lime','Magenta','Yellow']
  function shuffle(colors){
    for(let i = 0; i<colors.length;i++){
      let swap = (Math.floor(Math.random()*10)+1)
      let temp = colors[i]
      colors[i] = colors[swap]
      colors[swap] = temp
    }
    return colors
  }
  shuffled=shuffle(colors)
}
