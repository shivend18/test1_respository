import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mco-card-details',
  templateUrl: './mco-card-details.component.html',
  styleUrls: ['./mco-card-details.component.scss']
})
export class McoCardDetailsComponent implements OnInit {
  @Input() selectedList: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
