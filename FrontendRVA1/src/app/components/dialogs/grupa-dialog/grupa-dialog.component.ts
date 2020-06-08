import { Component, OnInit, Inject } from '@angular/core';
import { Smer } from 'src/app/models/smer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Grupa } from 'src/app/models/grupa';
import { GrupaService } from 'src/app/services/grupa.service';
import { SmerService } from 'src/app/services/smer.service';

@Component({
  selector: 'app-grupa-dialog',
  templateUrl: './grupa-dialog.component.html',
  styleUrls: ['./grupa-dialog.component.css']
})
export class GrupaDialogComponent implements OnInit {

  smerovi: Smer[];
  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<GrupaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Grupa,
              public grupaService: GrupaService,
              public smerService: SmerService
  ) { }

  ngOnInit() {
    this.smerService.getAllSmer().subscribe(smerovi =>
      this.smerovi = smerovi
    );
  }
  compareTo(a, b) {
    return a.id == b.id;
  }

  public add(): void {
    this.data.id = -1;
    this.grupaService.addGrupa(this.data);
    this.snackBar.open('Uspešno dodata grupa', 'U redu', { duration: 1500 });
  }

  public update(): void {
    this.grupaService.updateGrupa(this.data);
    this.snackBar.open('Uspešno modifikovana grupa', 'U redu', { duration: 1500 });
  }

  public delete(): void {
    this.grupaService.deleteGrupa(this.data.id);
    this.snackBar.open('Uspešno obrisana grupa', 'U redu', { duration: 1500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu', { duration: 500 });
  }

}
