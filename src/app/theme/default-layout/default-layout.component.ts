import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


interface Menu {
  icon: string;
  name: string;
  route: string;
}

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.less']
})
export class DefaultLayoutComponent implements OnInit {

  showFiller = false;
  title = 'neapp';


  links = ['111111', '22222',];


  menus: Menu[];

  // icon name  route

  constructor(private http: HttpClient) {
    this.load();
  }


  ngOnInit(): void {
  }

  save(): void {

    console.log('ss');
  }

  undo(): void {
    console.log('ss');
  }

  private load(): void {
    this.http.get('assets/data/menu.json').subscribe((data: any) => {

      this.menus = data.menu;

      console.log(this.menus);
    });
  }
}
