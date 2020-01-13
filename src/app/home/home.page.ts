import { DashboardPage } from './../dashboard/dashboard.page';
import { ToastController, NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: any;
  senha: any;
  DashPage: DashboardPage;

  load = this.loadingController.create({
    spinner: 'crescent',
    message: 'Aguarde! <br> Autenticando Usuario.',
    translucent: true,
    cssClass: 'custom-class custom-loading'
  });
  constructor(public toastController: ToastController,
              public navCtrl: NavController,
              public loadingController: LoadingController) {}

  async SuccessBox(msg) {
    const toast =  await this.toastController.create({
      showCloseButton: true,
      header: 'Psiu!',
      message: msg,
      duration: 2000,
      color: 'success',
      position: 'top',
      mode: 'md'
    });
    toast.present();
  }

  async ErrorBox(msg) {
    const toast = await this.toastController.create({
      showCloseButton: true,
      header: 'Psiu!',
      message: msg,
      duration: 2000,
      color: 'danger',
      position: 'top',
      mode: 'md'
    });
    toast.present();
  }

  async WarningBox(msg) {
    const toast = await this.toastController.create({
      showCloseButton: true,
      header: 'Psiu!',
      message: msg,
      duration: 2000,
      color: 'warning',
      position: 'top',
      mode: 'md'
    });
    toast.present();
  }

  async showLoader() {
    return (await this.load).present();
  }

  async hideLoader() {
    (await this.load).dismiss();
  }

  logForm() {
    this.showLoader();
    if (this.email === 'cliente@fariapersonalizados.com' && this.senha === 'val140817') {
      sessionStorage.setItem('email', this.email);
      this.hideLoader();
      this.navCtrl.navigateRoot('dashboard');
    } else {
      this.hideLoader();
      this.ErrorBox('Email ou senha Incorretos, Tente Novamente.');
      return;
    }
  }

}
