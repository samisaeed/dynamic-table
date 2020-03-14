import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DynamicTableComponent} from './dynamic-table/dynamic-table.component';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ViewComponentComponent} from "./view-component/view-component.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(DynamicTableComponent, {static: true}) paginator: DynamicTableComponent;
  @ViewChild(DynamicTableComponent, {static: true}) sort: DynamicTableComponent;

  public rows = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'hello', weight: 20.1797, symbol: 'Ne'},
    {position: 12, name: 'hi', weight: 20.1797, symbol: 'Ne'},
    {position: 13, name: 'bye', weight: 20.1797, symbol: 'Ne'},
  ];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.paginator.pagination.subscribe(res => {
      // console.log('parent pagination value ngAfterViewInit', res);
    });
    this.sort.sorting.subscribe(response => {
      // console.log('parent sorting value ngAfterViewInit', response);
    });
  }


  deleteValue(event: any) {
    // console.log('parent delete value', event);

  }

  editValue(event: any) {
    // console.log('parent edit value', event);
  }

  viewDetails(event): void {
    // const icon = 'delete';
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    dialogConfig.data = event;
    this.dialog.open(ViewComponentComponent, dialogConfig);
  }


}
