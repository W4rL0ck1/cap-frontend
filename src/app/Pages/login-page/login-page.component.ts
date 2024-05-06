import { UtilServices } from '../../Services/utilService.Service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../Models/user.model';
import { DataService } from '../../Services/data.Service';
import { UserToken } from '../../Utils/userToken.utils';
import { Utilities } from '../../Utils/utilities.util';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;
  public user!: User;
  public validUser!: boolean;

  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private util: UtilServices) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(7),
        Validators.maxLength(40),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.required
      ])]
    });
  }

  ngOnInit(): void {
    this.user = UserToken.getUser();
    console.log("🚀 ~ LoginPageComponent ~ chegou na login page")
  }

  submit() {
    this.busy = true;
    this
      .service
      .authenticate(this.form.value)
      .subscribe(
        async (data: any) => {
          console.log("login data", data)

          console.log("login data data", data.data)

          console.log("login data token", data.token)

          await this.util.delay(2300);
          this.toastr.success('Bem Vindo! ', 'Login com Sucesso!');
          this.setUser(data.data, data.token);
          this.busy = false;
          await this.util.delay(800);
          this.router.navigate(['/']);
          window.location.reload();
        },
        (err) => {
          console.log(err);
          this.busy = false;
          this.toastr.error('', 'Usuario ou Senha Invalidos!');
          this.router.navigate(['/login']);
        }
      );
  }

  setUser(user: User, token: string) {
    UserToken.set(user, token);
    this.router.navigate(['/']);
  }

}
