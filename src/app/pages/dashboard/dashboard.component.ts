import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router){}

  ngOnInit(): void {
    //verficase o token de Authentication vir vazio o usuario sera direcioando para o login
    if (localStorage.getItem('token') == null){
      this.router.navigate(['home']);
    }
  } 
  //metodo que se ao ser chamado vai limpar o token e ser direcionado para o login
  public close(){
    localStorage.clear;
    this.router.navigate(['home']);    

  }

 }
