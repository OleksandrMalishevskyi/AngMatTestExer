
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from "@angular/common/http";

export interface Todo {
  name: string;
  description: string;
  isinterimtrigger: string;
  interimtrigger: string;
  lbmanEffectivedeadlineinfo: string;
  editable: string;
}



/**
 * @title Table with sorting
 */
 @Component({
  selector: 'app-sort-form',
  templateUrl: './sort-form.component.html',
  styleUrls: ['./sort-form.component.css']
})
export class SortFormComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['name', 'description', 'isinterimtrigger', 'interimtrigger', 'lbmanEffectivedeadlineinfo', 'editable'];
  todos: Todo[] = []; //'name', 'description', 'isinterimtrigger', 'interimtrigger', 'lbmanEffectivedeadlineinfo', 'editable'

  dataSource: any ;


  constructor(private _liveAnnouncer: LiveAnnouncer,
              private httpClient: HttpClient) {}

              ngOnInit(){
                this.httpClient.get<Todo[]>("assets/data.json").subscribe(data =>{
                this.todos = data;
                  console.log(this.todos)
                  this.dataSource = new MatTableDataSource(data)
                })
              }              

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
