import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {
  DxDataGridModule,
  DxButtonModule,
  DxTemplateModule,
} from 'devextreme-angular'
import { FormsModule } from '@angular/forms'

const API_URL = '/api/posts'

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPosts()
  }

  loadPosts() {
    this.http.get<any[]>(API_URL).subscribe((data) => (this.posts = data))
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
      const newId = this.posts.length
        ? this.posts[this.posts.length - 1].id + 1
        : 1
      this.posts.push({ ...this.newPost, id: newId })
      this.newPost = { title: '', body: '' }
    }
  }
}
