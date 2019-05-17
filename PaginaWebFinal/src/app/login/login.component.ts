import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', Validators.required)
});


  constructor(private personsService: UsersService, private router: Router) { }

  onSubmit() {
    this.personsService.loginUser(this.userForm.value).subscribe(
      (user) => {
        console.log('User loged: ' + user);
        this.router.navigate(['/loginView']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
