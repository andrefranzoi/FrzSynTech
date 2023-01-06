import { ProfabricComponentsModule } from '@profabric/angular-components';
//import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from '@modules/main/main.component';
import { LoginComponent } from '@modules/login/login.component';
import { HeaderComponent } from '@modules/main/header/header.component';
import { FooterComponent } from '@modules/main/footer/footer.component';
import { MenuSidebarComponent } from '@modules/main/menu-sidebar/menu-sidebar.component';
import { BlankComponent } from '@pages/blank/blank.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileComponent } from '@pages/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from '@modules/register/register.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { MessagesComponent } from '@modules/main/header/messages/messages.component';
import { NotificationsComponent } from '@modules/main/header/notifications/notifications.component';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { UserComponent } from '@modules/main/header/user/user.component';
import { ForgotPasswordComponent } from '@modules/forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from '@modules/recover-password/recover-password.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { SubMenuComponent } from './pages/main-menu/sub-menu/sub-menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth/reducer';
import { uiReducer } from './store/ui/reducer';
import { defineCustomElements } from '@profabric/web-components/loader';
import { SidebarSearchComponent } from './components/sidebar-search/sidebar-search.component';
import { ListaClienteComponent } from './pages/cadastros/clientes/lista/lista.component';
import { DadosClientesComponent } from './pages/cadastros/clientes/dados/dados.component';
import { ColaboradorListaComponent } from './pages/cadastros/colaboradores/colaborador-lista/colaborador-lista.component';
import { ColaboradorDadosComponent } from './pages/cadastros/colaboradores/colaborador-dados/colaborador-dados.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

defineCustomElements();
registerLocaleData(localeEn, 'en-EN');

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    BlankComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,
    MessagesComponent,
    NotificationsComponent,
    UserComponent,
    ForgotPasswordComponent,
    RecoverPasswordComponent,
    MainMenuComponent,
    SubMenuComponent,
    MenuItemComponent,
    SidebarSearchComponent,
    ListaClienteComponent,
    ColaboradorListaComponent,
    ColaboradorDadosComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ auth: authReducer, ui: uiReducer }),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    FormsModule,
    NgbModule,
    ProfabricComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DadosClientesComponent]
})
export class AppModule { }
