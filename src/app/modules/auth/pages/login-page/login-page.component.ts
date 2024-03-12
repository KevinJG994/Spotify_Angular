import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  errorSession: boolean = false;
  formLogin: UntypedFormGroup = new UntypedFormGroup({});

  constructor(private authService: AuthService, private cookie: CookieService,
    private router: Router) { }

    ngOnInit(): void {
      this.formLogin = new UntypedFormGroup(
        {
          email: new UntypedFormControl('', [
            Validators.required,
            Validators.email
          ]),
          password: new UntypedFormControl('',
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(12)
            ])
        }
      )
    }

  sendLogin(): void {
    const { email, password } = this.formLogin.value
    this.authService.sendCredentials(email, password)

    // 200 < 400 - Entra en el authServices
    .subscribe(responseOk => {
      console.log('Sesión iniciada correctamente.', responseOk)
      const { tokenSession, data } = responseOk
      this.cookie.set('token', tokenSession, 20, '/')
      this.router.navigate(['/', 'tracks'])
    },
      err => { // Errores de >=400
        this.errorSession = true
        console.log('Error al iniciar sesión.')
      })

  }

}
