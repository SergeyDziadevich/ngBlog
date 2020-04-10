import { TestBed, ComponentFixture, async } from "@angular/core/testing";

import { PostPageComponent } from './post-page.component';
import { PostsService } from '../shared/services/posts.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { Post } from '../shared/interfaces';


class ActivatedRouteStub {

  private subject = new Subject();

  // get params(): Observable<Params> {
  //   return this.subject.asObservable();
  // }

  readonly params = this.subject.asObservable();

  setParamMap(params?: Params) {
    this.subject.next(params);
  }
}

class PostsServiceStub {
  getPostById(id: number) {
    return 1;
  }
}


describe('PostPageComponent', () => {
  let component: PostPageComponent;
  let fixture: ComponentFixture<PostPageComponent>;

  let postsService: PostsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPageComponent ],
      providers: [
        { provide: PostsService, useClass: PostsServiceStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ],
      // imports: [ HttpClientModule, HttpClientTestingModule ]
    });


    fixture = TestBed.createComponent(PostPageComponent);
    const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.setParamMap({id: '1'});

    postsService = TestBed.get(PostsService);
    // postsService = fixture.debugElement.injector.get(PostsService);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  xit('should fetch post by id on ngOnInit', () => {

    const post: Post = {
      id: '123',
      title: 'test title',
      text: 'test text',
      author: 'author text',
      date: new Date()
    };

    const getPostById = spyOn(postsService, 'getPostById').and.returnValue(of(post));

    component.ngOnInit();

    expect(getPostById).toHaveBeenCalled();

  });
});
