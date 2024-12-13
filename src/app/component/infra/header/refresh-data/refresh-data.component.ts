import {Component, inject} from '@angular/core';
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";
import {InputTextModule} from "primeng/inputtext";
import {BadgeModule} from "primeng/badge";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {CreditRetailStore} from "../../../../store/credit-retail/credit-retail-state";
import {CreditRequestService} from "../../../../service/credit-request.service";
import moment from "moment";
import {sleep} from "../../../../utils/common";
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-refresh-data',
  standalone: true,
  imports: [
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    BadgeModule,
    ProgressSpinnerModule,
    TranslateModule
  ],
  templateUrl: './refresh-data.component.html',
  styleUrl: './refresh-data.component.scss'
})
export class RefreshDataComponent {

  param = {value: 'world'}

  isLoading = false
  creditRetailStore = inject(CreditRetailStore)

  // 1 minute
  interval = 60000

  refreshButtonLabel = ''

  constructor(private service: CreditRequestService,
              private translate: TranslateService,
  ) {
    setInterval(() => this.autoRefresh(this.creditRetailStore.lastRefreshDate()), this.interval)
    this.translate.get('HEADER.REFRESH_BUTTON', { value: this.creditRetailStore.lastRefresh() }).subscribe(result => this.refreshButtonLabel = result)
  }

  get lastRefresh() {
    return `${this.refreshButtonLabel} ${this.creditRetailStore.lastRefresh()}.`
  }

  autoRefresh(lastRefreshDate: Date) {
    if (moment(lastRefreshDate).add(10, "minutes").isBefore(moment())) {
      this.refresh().then()
    }
  }

  async refresh() {
    this.isLoading = true
    await this.creditRetailStore.getCreditApplications(this.service)
    await sleep(300)
    this.isLoading = false
  }

}
