import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subscriptions = ["Basic", "Advanced", "Pro"];
  selectedSub = "Advanced";
  submited = false;
  emailData = "";
  subscriptionData = "";
  passwordData = "";

  onSubmit(formData) {
    this.submited = true;
    this.emailData = formData.form.value.email;
    this.subscriptionData = formData.form.value.subscription;
    this.passwordData = formData.form.value.passw;
  }
}
