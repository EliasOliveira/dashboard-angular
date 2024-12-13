import {Component} from '@angular/core';
import {AutoCompleteModule} from "primeng/autocomplete";
import {PaginatorModule} from "primeng/paginator";
import {ButtonModule} from "primeng/button";
import {MmaSearchComponent} from "../../../extensions/mma-search/mma-search.component";


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    AutoCompleteModule,
    PaginatorModule,
    ButtonModule,
    MmaSearchComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  onSearch() {
  }

}
