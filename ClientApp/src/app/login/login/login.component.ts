import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public readonly authService: AuthService,
    private router: Router
  ) { }

  public userName: string;
  public password: string;

  public error: boolean = false;

  login(): void {
    const userName = this.userName;
    const password = this.password;

    this.authService.login(userName, password)
      .subscribe(() => {
        console.log(`token: ${this.authService.token}`);
        this.router.navigateByUrl('/trips')
      },
        err => {
          console.log('ERROR: Login Server did not respond successfully. - Err: ', err);
          this.error = true;
        },
        () => {

        });
  }

  ngOnInit() {
    let isUserdLoggedIn: boolean = this.authService.isLoggedIn();
    if (isUserdLoggedIn) {
      this.router.navigate(['/trips']);
    }
  }

}
