import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './list-post.component.html',
  styles: ``
})
export class ListPostComponent {
  posts:any;
  
    constructor(private service:PostService) {}
  
    ngOnInit() {
  
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
        });
  }
}
