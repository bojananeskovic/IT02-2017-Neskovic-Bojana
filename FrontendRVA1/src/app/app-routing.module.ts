import { NgModule } from '@angular/core';
import { ProjekatComponent } from './components/projekat/projekat.component';
import { GrupaComponent } from './components/grupa/grupa.component';
import { SmerComponent } from './components/smer/smer.component';
import { HomeComponent } from './components/core/home/home.component';
import { AboutComponent } from './components/core/about/about.component';
import { AuthorComponent } from './components/core/author/author.component';
import { RouterModule } from '@angular/router';

const Routes = [
  { path: 'projekat', component: ProjekatComponent },
  { path: 'smer', component: SmerComponent },
  { path: 'grupa', component: GrupaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'author', component: AuthorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
