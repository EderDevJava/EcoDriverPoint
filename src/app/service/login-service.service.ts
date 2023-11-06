import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  //instanciar um objetos http
  constructor(private http: HttpClient, private router : Router) { }

  //metodo de login que vai receber uma obejto de usuario 
  login(appUser: { appLogin: string; appSenha: string; }){
    //só para testar para saber se oque esta vindo da tela html tá chegando aqui no service 
    //console.log("Usuario logado :" + appUser.login + appUser.senha )

    //pega o objeto http e fazer POS, passado a url de conexão e objeto usuario 
     return this.http.post(AppConstants.baseLogin, JSON.stringify(appUser)).subscribe(data => {
      //corpo do retuno http / recebe o valor na variavel data e depois transfoma isso em JSON atraves do parse, a Authorization devevá vir com Bearer então uso o split para remover  
      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
      console.log("logado");

      //esconder do front-end
      localStorage.setItem("token", token);

      console.info("Token tá ai:" + localStorage.getItem("token"));

      //validar se retorno ta funcionando 
      this.router.navigate(['dashboard'])

      //retorno em JSON
     },
     //se tiver algum problema de usuario ou senha, ou erro geral exibir uma msg
      error =>{
        console.error("Problema com o Login !");
        alert('Login ou Senha, Inválidos !');

      }
      
     )
  }
}
