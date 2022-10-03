import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Inyectamos la dependencia del servicio
  constructor(private auth:AuthorizationService) {

  }

  ngOnInit(): void {

  }

  public get isLogin(): boolean {
    return this.auth.isUserLogIn();
  }

  public btnLogout():void {
    this.auth.logout();    
  }

}
