import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  githubLink = ""
  title = ""
  related_links: { [key: string]: string; } = {};

  constructor(private service: GameService) { }
  ngOnInit(): void {
    this.service.getConfiguration().subscribe(data => {
      this.githubLink = data.github_url
      this.title = data.title
      this.related_links = data.related_links
    },
      error => {
        console.error('Failed to fetch Connect 4 configuration', error);
      })
  }
}
