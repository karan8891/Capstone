import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  register;

  constructor(private userService: UserService){}

// storing the details of users
  ngOnInit() {
    this.register = {
      username: '',
      password: '',
      email: ''
    };
  }
  // on click event from sign up
  registerUser() {
    this.userService.registerNewUser(this.register).subscribe(
      response => {
        // success response
        alert('Hey ' + this.register.username + '! You are now registered!')
      },
      error => console.log('error', error)
    );
  }
}