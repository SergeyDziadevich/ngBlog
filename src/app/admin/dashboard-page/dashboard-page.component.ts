import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../shared/services/posts.service';
import {Post} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  searchStr = '';
  private sub: Subscription;
  private sub2: Subscription;

  constructor(
    private postsService: PostsService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.sub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

  remove(id: string) {
    this.sub2 = this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id);
      this.alert.danger('Post was removed');
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }

    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }
}
