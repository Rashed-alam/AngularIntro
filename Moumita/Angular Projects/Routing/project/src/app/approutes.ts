import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import {DepartmentComponent} from './department/department.component';
import {ResultComponent} from './result/result.component';
import {HomeComponent} from './home/home.component';

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
        path: 'dept', 
        component: DepartmentComponent,
       
    },

    {
        path: 'res', 
        component: ResultComponent,
       
    },


    
];
