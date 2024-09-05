import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, AlertController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private alertController: AlertController) { }

  async alert() {
    const alert = await this.alertController.create({
      header: 'This is the title',
      backdropDismiss: true,
      message: 'This is the message',
      buttons: ['OK']
    });
    await alert.present();
  }
}
