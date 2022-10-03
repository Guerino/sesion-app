import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private secretKey: string;

  constructor() {
    //Clave generada en https://generate-random.org/
    this.secretKey = "5bnU8ssMga@BK6b2-5f4-BxyMuq@UKRzC";
  }

  //Metodo que permite encriptar una cadena de texto
  public encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.secretKey).toString();
  }

  //Metodo que permite desencriptar una cadena de texto
  public decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.secretKey).toString(CryptoJS.enc.Utf8);
  }

  //Metodo para guardar un dato en localStorage
  public saveData(key: string, value: string): void {
    window.localStorage.setItem(key, this.encrypt(value));
  }

  //Metodo para recuperar un dato en localStorage
  public getData(key: string): any {
    let data = window.localStorage.getItem(key) || "";
    return this.decrypt(data);
  }

  //Metodo para eliminar un dato en localStorage
  public removeData(key: string): void {
    window.localStorage.removeItem(key);
  }

  //Metodo para eliminar todos los datos en localStorage
  public clearData(): void {
    window.localStorage.clear();
  }

}
