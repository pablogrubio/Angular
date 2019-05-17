import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../users.service';
import * as $document from 'rxjs';

declare function autoType(elementClass, typingSpeed):any;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})


export class IntroComponent implements OnInit {

  ngOnInit(): void {
    autoType(".type-js",75);

  }
}
