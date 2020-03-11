import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit , AfterViewInit {
  @Input() rows;
  @Input() deleteBtn;
  @Input() editBtn;
  @Output() deleteData = new EventEmitter();
  @Output() editData = new EventEmitter();
  pagination = new BehaviorSubject(null);

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
     this.pagination.next(res);
   });
  }


  editRowData(element: any) {
    this.editData.emit(element);
  }
  deleteRowData(element: any) {
    this.deleteData.emit(element);
  }

  pageResize($event: Event) {
  }
}
