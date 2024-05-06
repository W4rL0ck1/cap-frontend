import { Utilities } from './../../../Utils/utilities.util';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserToken } from '../../../Utils/userToken.utils';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../Models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user!: User;
  public LogoUrl = '../assets/logo.png';

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.user = UserToken.getUser();
  }

  Logout(){
    UserToken.clear();
    this.router.navigate(['/login']);
    this.user.name = "";
  }

  ShowUser() {
    this.toastr.success( this.user.name ,'Logado Como:');
    console.log(this.user.name);
  }

  ToUserPage(){
    Utilities.setUser(this.user);
    this.router.navigate(['/userpage']);
    console.log(this.user);
  }
}
