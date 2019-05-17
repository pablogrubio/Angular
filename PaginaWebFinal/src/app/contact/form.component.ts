import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../users.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class ContactComponent {
  submitted = false;
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    ask: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });



  constructor(private personsService: UsersService,) {
  }

  get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted = true;
    if(this.userForm.invalid){
      return
    }


    this.personsService.saveForm(this.userForm.value).subscribe(
      (form) => {
        console.log('Formulary sended: ' + form);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}


