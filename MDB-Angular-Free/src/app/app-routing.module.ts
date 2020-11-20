import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { SkillsComponent } from './components/skills/skills.component';


const app_routes: Routes = [
    { path: '', component: SobremiComponent },
    { path: 'skilss', component: SkillsComponent   },
    { path: 'item', component: SkillsComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }






