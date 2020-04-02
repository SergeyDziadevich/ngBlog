import {Component,  OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {PostsService} from '../shared/services/posts.service';
import {Post} from '../shared/interfaces';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  public post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.post$ = this.route.params
      .pipe(
        switchMap((params) => {
          return this.postsService.getPostById(params.id);
        })
      );
  }
}
