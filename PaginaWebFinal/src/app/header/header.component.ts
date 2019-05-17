import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../user.model';
import {element} from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedUser: User;

  constructor(private usersService: UsersService) {
}

  ngOnInit() {
    this.usersService.loggedUserSubject.asObservable().subscribe(
      user => this.loggedUser = user
    );
  }

  logoutClicked() {
    this.usersService.logout();
  }

  scrollToElement(id: string): void {
    //console.log(element);
    const element = document.getElementById(id)
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
