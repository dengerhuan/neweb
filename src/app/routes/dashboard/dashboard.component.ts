import {Component, OnInit} from '@angular/core';
import {Chart} from '@antv/g2';

import {PageEvent} from '@angular/material/paginator';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  title = 'app';
  data = {};
  chart;
  graph;

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor() {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.install();
    }, 10);


    // this.chartData('c1');
    // this.chartData('c2');
    // this.chartData('c3');
  }

  install(): void {


    const data = [
      {year: '1951 ???', sales: 38},
      {year: '1952 ???', sales: 52},
      {year: '1956 ???', sales: 61},
      {year: '1957 ???', sales: 145},
      {year: '1958 ???', sales: 48},
      {year: '1959 ???', sales: 38},
      {year: '1960 ???', sales: 38},
      {year: '1962 ???', sales: 38},
    ];

    const cc = new Chart({
      container: 'c1',
      autoFit: true,
      height: 200,
      // padding: [0]
    });

    cc.data(data);
    cc.scale('sales', {
      alias: '?????????',
    });
    cc.axis('sales', {
      title: {},
    });

    cc.interval().position('year*sales');


    cc.render();


  }

  chartData(container: string): void {
    this.data = [
      {genre: 'Sports', sold: 275},
      {genre: 'Strategy', sold: 115},
      {genre: 'Action', sold: 120},
      {genre: 'Shooter', sold: 350},
      {genre: 'Other', sold: 150}
    ];
    this.chart = new Chart({
      container, // ?????????????????? ID
      width: 400, // ??????????????????
      height: 300 // ??????????????????
    });

    this.chart.source(this.data);
    this.chart.interval().position('genre*sold').color('genre');
    //  ????????????
    this.chart.render();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

}

function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
