import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public loginForm:FormGroup = this.formBuilder.group({
    email:['',[Validators.required,Validators.email],[]],
    pass:['',[Validators.required,Validators.maxLength(3)],[]],
  })
  constructor(
    private authService:AuthService,
    private router:Router,
    private formBuilder:FormBuilder,
  ){}

  onLogin(){
    this.router.navigateByUrl('user/perfil')
  }
}
