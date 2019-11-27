import { Component, OnInit, Input } from '@angular/core';
import { Marker, ContentType } from '../shared-classes';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
})
export class DetailViewComponent implements OnInit {
  @Input() marker: Marker;
  ContentType = ContentType;

  constructor() { }

  ngOnInit() {
  }

}
