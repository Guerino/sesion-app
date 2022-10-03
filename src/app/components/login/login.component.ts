import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginTxtEmail:string;
  public loginTxtPwd:string;

  constructor(private auth:AuthorizationService) { 
    //Inicializar atributos
    this.loginTxtEmail = "";
    this.loginTxtPwd = "";
  }

  ngOnInit(): void {

  }

  public btnLogin(): void {
    //Consultamos la API
    this.auth.loginSimple(this.loginTxtEmail, this.loginTxtPwd);
  }

}
