import {Routes} from '@angular/router';
import {PageNotFoundComponent} from "./component/view/page-not-found/page-not-found.component";
import {LoginComponent} from "./component/view/login/login.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'login/callback', component: OktaCallbackComponent },
  {
    path: 'protected',
    loadChildren: () => import('./component/protected/routes').then(m => m.PROTECTED_FEATURE_ROUTES),
    // canActivate: [OktaAuthGuard]
  },
  { path: '**', component: PageNotFoundComponent },
];
