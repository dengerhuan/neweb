import {Component, OnInit} from '@angular/core';
import {MAT_ICONS} from './icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})
export class IconComponent implements OnInit {


  icons: any;

  constructor() {
    this.icons = MAT_ICONS;

  }

  ngOnInit(): void {
  }

}
