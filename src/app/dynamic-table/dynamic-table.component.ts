import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit , AfterViewInit{
  @Input() rows;
  @Input() deleteBtn;
  @Input() editBtn;
  public columns;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
 constructor() {

 }
  ngOnInit(): void {
   this.generateTable();
   this.rows.paginator = this.paginator;
  }

  generateTable(): void {
    this.columns = (Object.keys(this.rows[0]));
    if (this.deleteBtn === true) {
      this.columns.push('actions');
    }
    this.rows = new MatTableDataSource(this.rows);
  }

  ngAfterViewInit(): void {
   this.paginator.page.subscribe(res => {
     console.log(res);
   });
  }


  deleteRowData(element: any) {
    console.log(element);
  }
}
