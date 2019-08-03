import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
import {LocationService } from './shared/location.service';
import { ContactusComponent} from './contactus/contactus.component';
import { from } from 'rxjs';
// import { BlogService } from './shared/blog.service';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
     {
        path: 'home', component: HomeComponent
      
    },
    {
        path: 'contactus', component: ContactusComponent
      
    },
    {
        path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]
      
    },
    {
        path: 'blog', component: BlogComponent, canActivate:[AuthGuard]
      
    },
    {
        path: '', component: HomeComponent
    },
    
    {
        path: '**', component: HomeComponent
    }
];