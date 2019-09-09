import { Routes } from '@angular/router';
// import { UserComponent } from './user/user.component';
// import { SignUpComponent } from './user/sign-up/sign-up.component';
// import { SignInComponent } from './user/sign-in/sign-in.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { AuthGuard } from './auth/auth.guard';
// import { DashboardComponent } from './user/dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
import { KnittingComponent } from './knitting/knitting.component';

export const appRoutes: Routes = [
    // {
    //     path: 'signup', component: SignUpComponent,
    //     // children: [{ path: '', component: SignUpComponent }]
    // },
    // {
    //     path: 'login', component: SignInComponent,
    //     // children: [{ path: '', component: SignInComponent }]
    // },
    // {
    //     path: 'userprofile', component: UserProfileComponent
    // },
    {
        path: 'blog', component: BlogComponent
    },
    // {
    //     path: 'a', component: UserComponent,
    // },
    {
        path:'', component: KnittingComponent,
    }
];