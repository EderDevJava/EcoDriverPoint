import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/service/login-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  //declaração do objeto no formulário
  appUser = { appLogin: '', appSenha: '' };

  //declaração de construtor do service de login criado
  constructor(private loginService: LoginServiceService) {}

  //1ª metodo
  public login(): void {
    //console.log("Recebendo dados de acesso :" + this.appUser.login + " - " + this.appUser.senha)
    this.loginService.login(this.appUser);   
  }
}
