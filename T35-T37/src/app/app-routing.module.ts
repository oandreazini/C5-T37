import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { CharactersComponent } from './characters/characters.component';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { AddCharcatersComponent } from './add-charcaters/add-charcaters.component';
import { ModifiCharacterComponent } from './modifi-character/modifi-character.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'characters',
    component: CharactersComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'addCharacter',
    component: AddCharcatersComponent
  },
  {
    path:'modifiCharacter',
    component: ModifiCharacterComponent
  },
  {
    path:'moreInfo/:id',
    component: MoreInfoComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'user',
    component: BoardUserComponent
  },
  {
    path:'admin',
    component: BoardAdminComponent
  },
  {
    path: '',
    redirectTo:'home', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
