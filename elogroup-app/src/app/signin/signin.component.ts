import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  user: any;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor( 
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    const username = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
  
    this.authService
      .authenticate(username,password)
      .subscribe(
        user => this.router.navigate(['user', user]),
        err => {
          console.log(err);
          this.loginForm.reset();
          this.userNameInput.nativeElement.focus();
          alert('Invalid user name or password');
        }
      );
  }

}
