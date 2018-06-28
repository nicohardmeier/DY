import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Variables para mostrar el correspondiente formulario según el estado
  signup: boolean = false;
  logged: boolean = false;
  welcome: boolean = false;

  //Formularios
  loginForm: FormGroup;
  signinForm: FormGroup;

  //Mensajes de validación de los formularios
  showValidationMail: boolean = false;
  showValidationConfirm: boolean = false;
  showValidationConfirmPassword: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.createLoginForm();
  }

  private createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  private createSigninForm() {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  public onLoginSubmit() {
    if (this.loginForm.valid) {
      this.signup = true;
      this.createSigninForm();
      this.showValidationMail = false;
    } else {
      this.showValidationMail = true;
    }
  }

  public onSigninSubmit() {
    if (this.signinForm.valid) {
      if (this.signinForm.controls['email'].value == this.loginForm.controls['email'].value) {
        if (this.signinForm.controls['password'].value == this.loginForm.controls['password'].value) {
          this.signup = false;
          this.welcome = true;
          this.showValidationMail = false;
          this.loginService.checkNewCustomer(this.signinForm.value)
            .subscribe(customer => this.loginService.newCustomer(customer));
        } else {
          this.showValidationConfirmPassword = true;
        }
      } else {
        this.showValidationConfirm = true;
      }
    } else {
      this.showValidationMail = true;
    }
  }

}
