import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserData {
  version: string;
  position: number;
  code: string;
  codeType: string;
  Description:string
}

const users=[
            {"version":"1.0", "position": 1, "code": "0SRC0LA", "codeType": "ICD10-PCS", "Description": "Replacement of Right Knee Joint with Unicondylar Synthetic Substitute- Uncemented- Open Approach"},
        {"version":"1.0", "position": 2, "code": "0SRC0LZ", "codeType": "ICD10-PCS", "Description": "Replacement of Right Knee Joint with Unicondylar Synthetic Substitute- Open Approach"},
        {"version":"1.0", "position": 14, "code": "0SRD0KZ", "codeType": "ICD10-PCS", "Description": "Replacement of Left Knee Joint with Nonautologous Tissue Substitute- Open Approach"},
       
        {"version":"1.0", "position": 24, "code": "81.54", "codeType": "ICD9-Procedure", "Description": "Total knee replacement"}
    ,
    {"version":"2.0", "position": 1, "code": "0SRC0LAv2", "codeType": "ICD10-PCS", "Description": "Replacement of Right Knee Joint with Unicondylar Synthetic Substitute- Uncemented- Open Approach"},
    {"version":"2.0", "position": 2, "code": "0SRC0LZ", "codeType": "ICD10-PCS", "Description": "Replacement of Right Knee Joint with Unicondylar Synthetic Substitute- Open Approach"},
    {"version":"2.0", "position": 3, "code": "0SRC0L9", "codeType": "ICD10-PCS", "Description": "Replacement of Right Knee Joint with Unicondylar Synthetic Substitute- Cemented- Open Approach"},
    {"version":"2.0", "position": 4, "code": "0SRC0JA", "codeType": "ICD10-PCS", "Description": "Replacement of Right Knee Joint with Synthetic Substitute- Uncemented- Open Approach"},
   
    {"version":"2.0", "position": 23, "code": "0SRW0JA", "codeType": "ICD10-PCS", "Description": "Replacement of Left Knee Joint, Tibial Surface with Synthetic Substitute, Uncemented, Open Approach"},
    {"version":"2.0", "position": 24, "code": "27447", "codeType": "CPT", "Description": "Total knee replacement"},
    {"version":"2.0", "position": 24, "code": "81.54", "codeType": "ICD9-Procedure", "Description": "Total knee replacement"}]

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'table-overview-example',
  styleUrls: ['table-overview-example.css'],
  templateUrl: 'table-overview-example.html',
})
export class TableOverviewExample implements OnInit {
  versions=["1.0","2.0"]
  displayedColumns: string[] = ['position', 'code', 'codeType', 'Description'];
    columnsToDisplay: string[] = this.displayedColumns.slice();

  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}




/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */