import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../users.service';
import {Form, User} from '../user.model';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {
  loggedUser:User;
  user;
  form:Form;
  constructor(private activatedRoute: ActivatedRoute, private personsService: UsersService, private router:Router) {}

  ngOnInit() {
    this.personsService.loggedUserSubject.asObservable().subscribe(
      user => this.loggedUser = user
    );

    this.activatedRoute.params
      .subscribe(
        params => {
          let id = params['id'];
          console.log('id: '+ id);
          this.personsService.getByIdForm(id)
            .subscribe(
              form => {
                console.log('Form: ' +form);
                this.form= form;
              }
            );
        }
      );
  }

  deleteClicked() {
    this.personsService.deleteForm(this.form)
      .subscribe(
        success => {
          window.alert('Formulario borrado');
          this.router.navigate(['/loginView'])
        },
        error => window.alert('No tienes permiso para borrar')
      );

  }

}
