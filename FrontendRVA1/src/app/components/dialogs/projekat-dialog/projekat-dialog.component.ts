import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Projekat } from 'src/app/models/projekat';
import { ProjekatService } from 'src/app/services/projekat.service';

@Component({
  selector: 'app-projekat-dialog',
  templateUrl: './projekat-dialog.component.html',
  styleUrls: ['./projekat-dialog.component.css']
})
export class ProjekatDialogComponent implements OnInit {

  public flag: number;
  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ProjekatDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Projekat,
              public projekatService: ProjekatService
  ) { }

  ngOnInit() {
  }

  public add(): void{
    this.projekatService.addProjekat(this.data);
    this.snackBar.open('Uspešno dodat projekat: ' + this.data.naziv, 'U redu', {
      duration: 2500
    });
  }

  public update(): void{
    this.projekatService.updateProjekat(this.data);
    this.snackBar.open('Uspešno modifikovan projekat: ' + this.data.naziv, 'U redu', {
      duration: 1500
    });
  }

  public delete(): void{
    console.log('brisem projekat sa id: ' + this.data.id);
    this.projekatService.deleteProjekat(this.data.id);
    this.snackBar.open('Uspešno obrisan projekat: ' + this.data.naziv, 'U redu', {
      duration: 1500
    });
  }

  public cancel(): void{
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu', {
      duration: 500
    });
  }

}
