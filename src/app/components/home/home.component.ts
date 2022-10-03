import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public textOriginal: string;
  public textEncrypt: string;
  public textDecrypt: string;

  constructor(private localStore: LocalStorageService) { 
    
    this.textOriginal = "#ArgentinaPrograma";  
    this.textEncrypt = "";
    this.textDecrypt = "";
  }

  ngOnInit(): void {
    this.textEncrypt = this.localStore.encrypt(this.textOriginal);
    this.textDecrypt = this.localStore.decrypt(this.textEncrypt);
  }

}
