// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';

//routes
import { appRoutes } from './routes';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './shared/blog.service';
import { KnittingComponent } from './knitting/knitting.component';
import { DatePipe } from '@angular/common';
import {KnittingService} from './shared/knittingService.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    KnittingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [BlogService, DatePipe, KnittingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
