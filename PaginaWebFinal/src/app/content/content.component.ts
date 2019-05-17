import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UsersService} from '../users.service';
import 'rxjs/Rx';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user.model';
import {Form} from '../user.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  name = '';


  constructor(private personsService: UsersService, public router: Router) {
  }
  ngOnInit(): void {
  }
}




