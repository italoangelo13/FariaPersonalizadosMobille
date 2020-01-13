import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
 load = this.loadingController.create({
  spinner: 'crescent',
  message: 'Aguarde! <br> Estamos Cadastrando suas informações.',
  translucent: true,
  cssClass: 'custom-class custom-loading'
});

constructor(public loadingController: LoadingController) { }

ngOnInit() {
  }

  async showLoader() {
    return (await this.load).present();
  }

  async hideLoader() {
    (await this.load).dismiss();
  }

formCadastro() {
    this.showLoader();
    this.hideLoader();
  }

}
