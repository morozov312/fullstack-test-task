import {Component, OnInit} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {
  DxDataGridModule,
  DxButtonModule,
  DxTemplateModule,
} from 'devextreme-angular'
import {FormsModule} from '@angular/forms'

const API_URL = 'http://localhost:3000/api/posts'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DxDataGridModule, DxButtonModule, DxTemplateModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  posts: any[] = []
  newPost = {
    title: '',
    body: '',
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadPosts()
  }

  loadPosts() {
    this.http.get<any[]>(API_URL).subscribe((data: any) => (this.posts = data))
  }

  deletePost(event: any) {
    const rowData = event.row.data
    if (confirm('Удалить пост?')) {
      this.http
        .delete(`${API_URL}/${rowData.id}`)
        .subscribe(() => this.loadPosts())
    }
  }

  addPost() {
    if (this.newPost.title && this.newPost.body) {
      this.http
        .post(API_URL, {
          title: this.newPost.title,
          body: this.newPost.body,
          userId: 1,
        }).subscribe((data: any) => {
        this.posts.push(data)
      })
      this.newPost = {title: '', body: ''}
    }
  }
}
