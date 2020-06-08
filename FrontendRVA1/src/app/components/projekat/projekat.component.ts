import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Projekat } from 'src/app/models/projekat';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProjekatService } from 'src/app/services/projekat.service';
import { MatDialog } from '@angular/material/dialog';
import { ProjekatDialogComponent } from '../dialogs/projekat-dialog/projekat-dialog.component';

@Component({
  selector: 'app-projekat',
  templateUrl: './projekat.component.html',
  styleUrls: ['./projekat.component.css']
})
export class ProjekatComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'oznaka', 'opis', 'actions'];
  dataSource: MatTableDataSource<Projekat>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private projekatService: ProjekatService,
    private dialog: MatDialog) { }

ngOnInit(): void {
  console.log('Inicijalizacija Projekat komponente!');
  this.loadData();
}

public loadData() {
    this.projekatService.getAllProjekat().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openDialog(flag: number, id?: number, naziv?: string, oznaka?: string, opis?: string){
    const dialogRef = this.dialog.open(ProjekatDialogComponent,
                                        {data: {id, naziv, oznaka, opis}}
    );

    dialogRef.componentInstance.flag = flag;

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

}
