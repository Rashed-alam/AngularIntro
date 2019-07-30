import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import {HomeComponent} from './home/home.component';
import {TeacherComponent} from './teacher/teacher.component';

export const appRoutes: Routes = [
    {
        path: '', 
        component: HomeComponent,
       
    },
    {
        path: 'std', 
        component: StudentComponent,
       
    },
    {
        path: 'tec', 
        component:TeacherComponent,
       
    },

    


    
];
