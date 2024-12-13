import {Component, inject} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {firstValueFrom, take} from "rxjs";
import {Router} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    TranslateModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  appVersion = ""
  constructor(router: Router, http: HttpClient) {

    http.get('assets/version.json', {})
      .pipe( take(1) )
      .subscribe((next: any) => this.appVersion = next.version)

  }

  async signIn(): Promise<void> {
    throw new Error('Not implemented.')
  }

}
