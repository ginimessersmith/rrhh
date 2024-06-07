import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequestInterface } from '../../interfaces/login-request.interface';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email], []],
    pass: ['', [Validators.required, Validators.minLength(3)], []],
  })
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  onLogin() {
    const loginRequestInterface: LoginRequestInterface = {
      ...this.loginForm.value
    }
    console.log({loginRequestInterface})
    this.authService.login(loginRequestInterface)
    .subscribe({
      next:(resp)=>{
        console.log({resp})
        localStorage.setItem('userData',JSON.stringify(resp))
        Swal.fire('','Iniciado con exito','success')
        this.router.navigateByUrl('user/perfil')
      },
      error:(err)=>{
        console.log({err})
        Swal.fire('Error','ingrese los datos correctos','error')
      }
    })
  }


}
