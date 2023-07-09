import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  githubLink = ""

  constructor(private service: GameService){}
  ngOnInit(): void {
    this.service.getConfiguration().subscribe(data => {
    this.githubLink = data.github_url},
    error => {
      console.error('Failed to fetch Connect 4 grid data', error);
    })
  }
  title = 'connect4';
}
