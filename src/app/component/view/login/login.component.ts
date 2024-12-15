import {Component, inject} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {firstValueFrom, take} from "rxjs";
import {Router} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

import {HttpClient} from "@angular/common/http";
import {CardModule} from "primeng/card";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    TranslateModule,
    CardModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    PaginatorModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  appVersion = ""

  user = ''
  pass = ''

  constructor(router: Router, http: HttpClient) {

    http.get('assets/version.json', {})
      .pipe( take(1) )
      .subscribe((next: any) => this.appVersion = next.version)

  }

  async signIn(): Promise<void> {
    throw new Error('Not implemented.')
  }

}
