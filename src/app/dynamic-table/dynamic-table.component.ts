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
  @Input() serverPagination;
  @Input() viewBtn;
  @Output() deleteData = new EventEmitter();
  @Output() editData = new EventEmitter();
  @Output() viewDetails = new EventEmitter();
  pagination = new BehaviorSubject(null);
  sorting = new BehaviorSubject(null);

  public columns;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
 constructor() {

 }
  ngOnInit(): void {
   this.generateTable();
   this.rows.paginator = this.paginator;
   this.rows.sort = this.sort;

  }

  generateTable(): void {
    this.columns = (Object.keys(this.rows[0]));
    if (this.deleteBtn === true || this.editBtn === true) {
      this.columns.push('actions');
    }
    this.rows = new MatTableDataSource(this.rows);
  }

  ngAfterViewInit(): void {
   if (this.serverPagination === true) {
     this.paginator.page.subscribe(res => {
       this.pagination.next(res);
     });
     this.sort.sortChange.subscribe(response => {
       this.sorting.next(response);
     });
   }
  }
  editRowData(element: any) {
    this.editData.emit(element);
  }
  deleteRowData(element: any) {
    this.deleteData.emit(element);
  }
  viewRowData(element): void {
   this.viewDetails.emit(element);
  }
}
