import { Grupa } from './../../models/grupa';
import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { Student } from 'src/app/models/student';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { StudentService } from 'src/app/services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { Projekat } from 'src/app/models/projekat';
import { StudentDialogComponent } from '../dialogs/student-dialog/student-dialog.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnChanges {

  displayedColumns = ['id', 'ime', 'prezime', 'brojIndeksa', 'grupa', 'projekat', 'actions'];
  dataSource: MatTableDataSource<Student>;

  @Input() selektovanaGrupa: Grupa;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public studentService: StudentService,
              public dialog: MatDialog) { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.selektovanaGrupa.id) {
      console.log("Ucitavanje podataka");
      this.loadData();
    }
  }

  public loadData() {
    this.studentService.getStudent(this.selektovanaGrupa.id)
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        // pretraga po nazivu ugnježdenog objekta
        this.dataSource.filterPredicate = (data, filter: string) => {
          const accumulator = (currentTerm, key) => {
            return key === 'projekat' ? currentTerm + data.projekat.naziv : currentTerm + data[key];
          };
          const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
          const transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) !== -1;
        };

        // sortiranje po nazivu ugnježdenog objekta
        this.dataSource.sortingDataAccessor = (data, property) => {
          if (property=='projekat') {
            return data.projekat.naziv.toLocaleLowerCase();
          } else {
            return data[property];
          }
        };

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

  }

  public openDialog(flag: number, id?: number, ime?: string, prezime?: string, brojIndeksa?: string,
                    grupa?: Grupa, projekat?: Projekat) {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      data: {
        i: id, id, ime, prezime, brojIndeksa,
        grupa, projekat
      }
    });
    dialogRef.componentInstance.flag = flag;
    if (flag === 1) {
      dialogRef.componentInstance.data.grupa = this.selektovanaGrupa;
    }

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }
}
