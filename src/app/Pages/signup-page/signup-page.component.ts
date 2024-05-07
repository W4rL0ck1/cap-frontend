import { UtilServices } from './../../Services/utilService.Service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../Models/user.model';
import { DataService } from '../../Services/data.Service';
import { UserToken } from '../../Utils/userToken.utils';
import { Utilities } from '../../Utils/utilities.util';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  public form!: FormGroup;
  public busy = false;
  public password!: string;
  public passwordConfirm!: string;
  public user!: User;
  public genders: Array<string> = ['M', 'F'];
  public selectedGender: string | null = null;

  constructor(private router: Router,
              private service: DataService,
              private fb: FormBuilder,
              private toastr: ToastrService,
              private util: UtilServices ) {

    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.minLength(7),
        Validators.maxLength(40),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.required
      ])],
      cpfcnpj: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d{11}(?:\d{3})?$/)
      ])],
      gender: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(1),
        Validators.required
      ])],
    });
  }

  ngOnInit(): void {
    const mail = Utilities.GetSignUpEmail();
    var myJSON = JSON.stringify(mail);

    if(mail == null){
        this.router.navigate(['/']);
     }
     else{
        this.form.patchValue({email: myJSON.substring(10, myJSON.length - 2)});
     }

    this.busy = true;
    this.util.delay(5000)
    this.busy = false;
  }

  submit() {
    this.busy = true;
    this
      .service
      .createUser(this.form.value)
      .subscribe(
        async (data: any) => {
          console.log("🚀 ~ SignupPageComponent ~ data:", data)
          if(data.error){
            this.toastr.error('', `Erro no cadastro! : ${data.error || ""}`);
          }
          this.busy = false;
          this.toastr.success(data.message, 'Cadastro Efetuado com Sucesso!');
          this.login();
        },
        (err: any) => {
          console.log("🚀 ~ SignupPageComponent ~ submit ~ err:", err)
          this.busy = false;
          err.error.$values.forEach((item: { propertyName: any; errorMesage: any; }) => {
            this.toastr.error('', `Erro ao efetuar cadastro! : ${item.propertyName}:  ${item.errorMesage || ""}`);
          });
        }
      );
  }

  login() {
    this.busy = true;
    this
      .service
      .authenticate(this.form.value)
      .subscribe(
        async (data: any) => {
            await this.util.delay(2300);
            this.toastr.success('', 'Bem Vindo!');
            this.setUser(data.data.user, data.token);
            this.busy = false;
            await this.util.delay(800);
            this.router.navigate(['/']);
            window.location.reload();
        },
        (err) => {
          this.busy = false;
          this.toastr.error('', `Erro no login! ${err.error || err.message || ""}`);
          this.router.navigate(['/login']);
        }
      );
  }

  setUser(user: User, token: string) {
    UserToken.set(user, token);
    this.router.navigate(['/']);
  }
}



