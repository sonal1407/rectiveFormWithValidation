import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//------------------------------------//
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
	{ path: 'view', component: ViewComponent },
	{ path: 'add', component: AddComponent },
	{ path: 'edit', component: EditComponent },
	{ path: '', redirectTo: 'view', pathMatch: 'full' }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class StudentRoutingModule {}
