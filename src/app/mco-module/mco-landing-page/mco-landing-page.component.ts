import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mco-landing-page',
  templateUrl: './mco-landing-page.component.html',
  styleUrls: ['./mco-landing-page.component.scss']
})
export class McoLandingPageComponent implements OnInit {
  /*selectedRows for mapping selected user information */
  selectedRows: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  /*
   * @method: MapSelectedDetails - Void:
   * @params: listItem - list of selected rows of user information
   * @description:It is used as mapping for the callback(@output) function from app-mco-display-list
   * @member: is a member of McoLandingPageComponent
   * @returns: void.
   */
  MapSelectedDetails(listItem): void {
    this.selectedRows = listItem;
  }
}
