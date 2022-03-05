import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public savedUsers: UserInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
