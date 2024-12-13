import {Component, ElementRef, Inject, inject, signal, ViewChild} from '@angular/core';
import {SearchComponent} from "./search/search.component";
import {NotificationComponent} from "./notification/notification.component";
import {ButtonModule} from "primeng/button";
import {Dealer} from "../../../domain/dealer";
import {AvatarModule} from "primeng/avatar";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {OverlayModule} from "primeng/overlay";
import {DividerModule} from "primeng/divider";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";
import {DOCUMENT} from "@angular/common";
import {addClickOutsideListener, getUserInitials} from "../../functions";
import {UserStore} from "../../../store/user/UserState";
import {RefreshDataComponent} from "./refresh-data/refresh-data.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        SearchComponent,
        NotificationComponent,
        ButtonModule,
        AvatarModule,
        OverlayPanelModule,
        OverlayModule,
        DividerModule,
        RadioButtonModule,
        FormsModule,
        RefreshDataComponent,
        TranslateModule
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  protected dealerSelected = signal<Dealer|undefined>(undefined);
  protected menuClosed = true;

  protected userStore = inject(UserStore)

  protected user = this.userStore.user

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.setDealer()
  }

  @ViewChild('divUser') divUser?: ElementRef;

  ngAfterViewInit() {
    addClickOutsideListener(this.document, 'click', (target) => {
      const isDivUser = this.divUser?.nativeElement.contains(target);
      if (!isDivUser) {
        this.menuClosed = true
      }
    })
  }

  async signOut() {
      throw new Error('Not implemented');
  }

  onDealerSelected(dealer: Dealer) {
    this.dealerSelected.set(dealer);
  }

  setDealer() {
    return this.dealerSelected() ? this.dealerSelected() : this.user().dealers[0];
  }

  protected readonly getUserInitials = getUserInitials;
}
