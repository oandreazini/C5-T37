import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { CharactersComponent } from './characters/characters.component';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { AddCharcatersComponent } from './add-charcaters/add-charcaters.component';
import { ModifiCharacterComponent } from './modifi-character/modifi-character.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
