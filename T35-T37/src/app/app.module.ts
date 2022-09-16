import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';

import{HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { AddCharcatersComponent } from './add-charcaters/add-charcaters.component';
import { ModifiCharacterComponent } from './modifi-character/modifi-character.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    AboutComponent,
    HomeComponent,
    MoreInfoComponent,
    AddCharcatersComponent,
    ModifiCharacterComponent,
    LoginComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
