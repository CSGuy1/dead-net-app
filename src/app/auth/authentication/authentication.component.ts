import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { AuthResponse } from './authResponse';

@Component({
  selector: 'dn-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  public buttonClicked!: string;
  private authObservable!: Observable<AuthResponse>;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(data: NgForm) {
    console.log("Button clicked = " + this.buttonClicked);
    console.log(data.value);

    if (this.buttonClicked == "Signup") {
      this.authObservable = this.auth.signup(data.value.email, data.value.password);
    } else if (this.buttonClicked == "Login") {
      this.authObservable = this.auth.login(data.value.email, data.value.password);
    }

    this.authObservable.subscribe(data => {
      console.log(data);

    },
      error => {
        console.log(error);
      }
    )

    data.reset();
  }
}
