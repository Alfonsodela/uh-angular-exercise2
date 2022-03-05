import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public createUserForm?: FormGroup;
  public savedUsers: User[] = [];
  // public countries: Countries[] = [
    // "France", "Germany", "Italy", "Portugal", "Spain", "United States", "United Kingdom"
  // ];

  constructor() {}

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public saveUsers(event: Event) {
    event.preventDefault();
    if (this.createUserForm?.valid) {
        console.log(this.createUserForm.value);
        this.savedUsers.push(this.createUserForm.value);
      }
    }

}
