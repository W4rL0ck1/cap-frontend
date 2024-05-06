import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../../Models/user.model';
import { ToastrService } from 'ngx-toastr';
import { UserToken } from '../../Utils/userToken.utils';
import { Utilities } from '../../Utils/utilities.util';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  public form: FormGroup;
  public LogoUrl = '../assets/logo.png';
  public user!: User;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
  ){
    this.form = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.minLength(7),
          Validators.maxLength(40),
          Validators.required,
        ]),
      ],
    });
  }

  ngOnInit(): void {
    this.user = UserToken.getUser();
  }

  signUp(){
    Utilities.SetSignUpEmail(this.form.value);
    console.log(Utilities.GetSignUpEmail());
  }

  teste(){
    console.log(this.form.value);
  }
}
