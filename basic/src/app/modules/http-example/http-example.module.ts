import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'

import { HttpExampleComponent } from './http-example.component'
import { InterceptorsProvider } from './interceptors/interceptors-provider'
import { FBPostService } from './services/fb-post.service'
import { FirebasePostComponent } from './components/firebase-post/firebase-post.component'
import { youtubeSearchInjectable } from './services/yt-search.injectable'
import { YoutubeSearchComponent } from './components/youtube-search/youtube-search.component'
import { SearchBoxComponent } from './components/youtube-search/search-box/search-box.component';
import { ResultCardComponent } from './components/youtube-search/result-card/result-card.component'

const routes: Routes = [
  {
    path: '',
    component: HttpExampleComponent,
    children: [
      { path: '', redirectTo: 'youtube-search' },
      { path: 'youtube-search', component: YoutubeSearchComponent },
      { path: 'fb-post', component: FirebasePostComponent }
    ]
  }
]

@NgModule({
  declarations: [
    HttpExampleComponent,
    FirebasePostComponent,
    YoutubeSearchComponent,
    SearchBoxComponent,
    ResultCardComponent
  ],
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule.forChild(routes)],
  providers: [FBPostService, InterceptorsProvider, youtubeSearchInjectable]
})
export class HttpExampleModule {}
