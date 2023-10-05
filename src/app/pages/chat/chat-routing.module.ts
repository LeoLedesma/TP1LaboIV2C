import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';

const routes: Routes = [
  {path: '',component: ChatComponent},
  {path: '**',component: ChatComponent},
  //{path: ':id',component: ChatComponent}  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }