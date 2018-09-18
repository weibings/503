import {RouterModule, Routes} from '@angular/router';
import {ProblemListComponent} from './components/problem-list/problem-list.component';
import {ProblemDetailComponent} from './components/problem-detail/problem-detail.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: "",
    redirectTo:"problems",
    pathMatch:"full"
  },
  {
    path:"problems",
    component:ProblemListComponent
  },
  {
    path:"problems/:id",
    component:ProblemDetailComponent
  },
  {
    path:"**",
    redirectTo: "problems"
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class routingModule {};
