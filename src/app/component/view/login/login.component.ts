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
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {
    Auth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword
} from "@angular/fire/auth";

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

  firestore: Firestore = inject(Firestore);
  angularFireAuth = inject(Auth);


  constructor(router: Router,
              http: HttpClient) {


  }


  async signIn(): Promise<void> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.angularFireAuth, this.user, this.pass);
      console.log("userCredential", userCredential)
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(`Error occured: ${errorCode} - ${errorMessage}`);
    }
  }

  async signInWithGoogle(): Promise<void> {
    try {
      const userCredential = await signInWithPopup(this.angularFireAuth, new GoogleAuthProvider())
      console.log("userCredential", userCredential)
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(`Error occured: ${errorCode} - ${errorMessage}`);
    }
  }

}
