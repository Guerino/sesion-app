import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//Importar
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  //URL de nuestra api
  private strUrlApi:string;
  private strRemoteUrlApi:string;
  
  //Inyectar dependencias en el constructor
  constructor(private http:HttpClient, private router:Router, private localStorage: LocalStorageService) {
    //Ruta de nuestro archivo json(en nuestro caso es local) 
    this.strUrlApi = '../../assets/data/user.json';

    //Ruta a nuestra API
    this.strRemoteUrlApi = 'http://localhost:9000/api/authenticate';
  }

  /**
   * Login real para conectarse a una API local o remota
   * @param email 
   * @param pwd 
   */
  public login(email:string, pwd: string): void {
    //Cuerpo del metodo POST con los parametros del email y el pwd
    const user = {
      email: email,
      password: pwd
    };

    //Convertir un objeto de javascript a JSON
    const body = JSON.stringify(user);

    //Llamada a la API
    this.http.post(this.strRemoteUrlApi, body).subscribe(
      (response: any) => {
        if(response.token != null) {
          //Guardamos el token
          //localStorage.setItem('token', response.token);
          this.localStorage.saveData('token', response.token);
          
          //Redireccionar
          this.router.navigate(['/dashboard']);
        } else {
          //Mensaje solo para propositos de depuracion
          console.log("Usuario y/o contraseña no valida.")
        }
      }
    ); 
  }

  /**
   * Login de ejemplo, se puede utilizar mientras no se haya
   * construido la API Rest en el Back end
   * @param email 
   * @param pwd 
   */
  public loginSimple(email:string, pwd: string): void {     
    //Llamada a la API
    this.http.get(this.strUrlApi).subscribe(
      (response: any) => {
        if(response.token != null) {
          //Guardamos el token
          //localStorage.setItem('token', response.token);
          this.localStorage.saveData('token', response.token);
          //Redireccionar
          this.router.navigate(['/dashboard']);
        }
      }
    ); 
  }
  
  public logout(): void {
    //Al cerrar sesion eliminamos el token
    localStorage.removeItem('token');
    //Redireccionar
    this.router.navigate(['/']);
  }
  
  public isUserLogIn(): boolean {
    return (localStorage.getItem('token') != null);
  }

}
