import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {UsersService} from '../users.service';
import {User} from '../user.model';
import {Form} from '../user.model';
import 'rxjs/Rx';


@Component({
  selector: 'app-loginView',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  form: Form[] = [];

  constructor(private activatedRoute: ActivatedRoute, private personsService: UsersService, public router: Router) {
  }

  ngOnInit(): void {
    this.personsService.getAllForms()
      .subscribe(
        (form) => {
          this.form = form;
        },
        (error) => {
          console.log(error)
        }
      )
  }
}
