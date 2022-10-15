import { Component, OnInit } from '@angular/core';
// importando lo mismo que tiene recuperar-usuario, que sí funciona
import { Router } from '@angular/router';
//import { AlertController } from '@ionic/angular';
//import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-clubes-jazz',
  templateUrl: './clubes-jazz.page.html',
  styleUrls: ['./clubes-jazz.page.scss'],
})
export class ClubesJazzPage implements OnInit {

  constructor(

    private router: Router,
    //private alertController: AlertController,
    //private authService: AuthService

  ) { }

  ngOnInit() {
  }

}
