import { Component, Input } from '@angular/core';
import { LoginResponseInterface } from 'src/app/auth/interfaces';

@Component({
  selector: 'user-my-perfil',
  templateUrl: './my-perfil.component.html',
  styleUrls: ['./my-perfil.component.css']
})
export class MyPerfilComponent {
  @Input() userData!: LoginResponseInterface
}
