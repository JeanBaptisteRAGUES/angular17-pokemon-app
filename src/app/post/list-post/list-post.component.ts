import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './list-post.component.html',
  styles: ``
})
export class ListPostComponent {
  posts:any;
  postsObservables: Observable<any>;
  
  constructor(private service:PostService) {}

  ngOnInit() {

    this.postsObservables = this.service.getPosts();

    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      });
  }
}
