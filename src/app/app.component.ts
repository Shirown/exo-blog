import { Component } from '@angular/core';
import { Post } from './post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exo Blog ';
  posts = [
	  new Post('Article 1'),
	  new Post(),
	  new Post('Article 3')
  ];
}
