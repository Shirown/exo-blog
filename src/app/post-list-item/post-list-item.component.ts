import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post'

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postItem: Post;

  constructor() {}

  ngOnInit() {
  }

  onLoveIts(inLove: boolean = true){
	  this.postItem.loveIts += (inLove) ? 1 : -1;
  }

  getColor(){
	  if(this.postItem.loveIts !== 0)
	  {
		  return (this.postItem.loveIts > 0) ? 'green' : 'red';
	  }

	  return 'black';
  }
}
