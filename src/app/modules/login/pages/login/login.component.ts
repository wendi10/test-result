import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/localStorage.service';

import { LOGIN } from 'src/app/shared/consts/api.const';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formGroup: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private http: HttpService, private storageService: StorageService, private router: Router) { }

  public handleLogin(): void {
    const requestBody = this.formGroup.getRawValue();
    this.http.postData(LOGIN, requestBody).subscribe((resp) => {
      this.storageService.setSessionToken(resp)
      this.router.navigate(['./customer']);
    })
  }
}
