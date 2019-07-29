import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRoutes} from './approutes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import {RouterModule} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    TeacherComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
