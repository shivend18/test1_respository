import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {McoServicesService} from '../services/mco-services.service';
import {PaginationService} from '../services/pagination.service';


interface SelectedItemList {
  id: number;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-mco-display-list',
  templateUrl: './mco-display-list.component.html',
  styleUrls: ['./mco-display-list.component.scss']
})

export class McoDisplayListComponent implements OnInit {
  @Output() showSelectedRow = new EventEmitter<any>();
  // array of all items to be paged
  allItems: any[];
  // paginate object
  paginate: any = {};
  // paged items
  pagedItems: any[];
  selectedAll = false;
  indeterminateValue = false;
  selectedItem: SelectedItemList[] = [];
  pageCount = 10;

  constructor(private mcoService: McoServicesService, private pageSrv: PaginationService) {
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  /*
  * @method: getUserDetails - Void:
  * @params: none
  * @description:Make a api call to get user information from backend
  * @member: is a member of McoDisplayListComponent
  * @returns: void.
  */

  getUserDetails(): void {
    this.mcoService.getEmployeeData().subscribe(results => {
      this.allItems = results;
      // initialize to page 1
      this.setPage(1);
    });
  }

  /*
  * @method: setPage - Void:
  * @params: none
  * @description:It set all items related to pagination, get pagination details from server and
  * set the current page related items from total list.
  * @member: is a member of McoDisplayListComponent
  * @returns: void.
  */

  setPage(page: number): void {
    if (page < 1 || page > this.paginate.totalPages) {
      return;
    }
    /* get paginate object from service*/
    this.paginate = this.pageSrv.getPaginationDetails(this.allItems.length, page, this.pageCount);
    /* get current page of items*/
    this.pagedItems = this.allItems.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
  }

  /*
  * @method: selectAll - Void:
  * @params: none
  * @description:used to selecting complete user information when clicked on select all check box.
  * @member: is a member of McoDisplayListComponent
  * @returns: void.
  */

  selectAll(): void {
    if (this.indeterminateValue) {
      this.indeterminateValue = false;
    }
    this.selectedItem = [];
    this.selectedAll = !this.selectedAll;
    this.allItems.forEach((item) => {
      item.selected = this.selectedAll;
      if (this.selectedAll) {
        this.selectedItem.push(item);
      }
    });
  }

  /*
  * @method: itemSelected - Void:
  * @params: none
  * @description:When user selects single row from user information list.
  * @member: is a member of McoDisplayListComponent
  * @returns: void.
  */

  itemSelected(selectedItem, isSelected): void {
    let selectedCount = 0;
    let isItemPresent = false;
    const totalCount = this.allItems.length;
    this.allItems.forEach((itemList) => {
      if (itemList.selected) {
        selectedCount++;
      }
    });
    if (selectedCount === totalCount) {
      this.indeterminateValue = false;
      this.selectedAll = true;
    } else if (selectedCount > 0 && selectedCount < totalCount) {
      this.selectedAll = false;
      this.indeterminateValue = true;
    } else if (selectedCount === 0) {
      this.indeterminateValue = false;
      this.selectedAll = false;
    }
    if (isSelected) {
      this.selectedItem.find((itemSelected) => {
        isItemPresent = (itemSelected.id === selectedItem.id);
      });
      if (!isItemPresent) {
        this.selectedItem.push(selectedItem);
      }
    } else {
      this.selectedItem.splice(this.selectedItem.findIndex(index => index.id === selectedItem.id), 1);
    }
    this.showSelectedRow.emit(this.selectedItem);
  }

  /*
  * @method: setPageDetails - Void:
  * @params: none
  * @description: It is used to number user records to be shown at pagination.
  * @member: is a member of McoDisplayListComponent
  * @returns: void.
  */

  setPageDetails(): void {
    this.setPage(1);
  }
}
