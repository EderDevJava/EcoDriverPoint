import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
//capturar as informações vindo do Formulário
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderInterceptorService } from './service/header-interceptor.service';

const appRouters: Routes = [
  //declaração de todas as Rotas
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona para o login por padrão
];

@NgModule({
  declarations: [AppComponent, HomeComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouters)
  ],
  exports: [RouterModule],
  providers: [{provide: HTTP_INTERCEPTORS,    useClass: HeaderInterceptorService,    multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
