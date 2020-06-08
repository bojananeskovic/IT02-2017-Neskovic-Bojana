import { Component, OnInit, Inject } from '@angular/core';
import { Projekat } from 'src/app/models/projekat';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';
import { ProjekatService } from 'src/app/services/projekat.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {

  projekti: Projekat[];
  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<StudentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Student,
              public studentService: StudentService,
              public projekatService: ProjekatService
  ) { }


  ngOnInit() {
    this.projekatService.getAllProjekat().subscribe(projekti =>
      this.projekti = projekti
    );
  }

  public add(): void {
    this.data.id = -1;
    this.studentService.addStudent(this.data);
    this.snackBar.open('Uspešno dodat student', 'U redu', { duration: 2500 });
  }

  public update(): void {
    this.studentService.updateStudent(this.data);
    this.snackBar.open('Uspešno modifikovan student', 'U redu', { duration: 2500 });
  }

  public delete(): void {
    this.studentService.deleteStudent(this.data.id);
    this.snackBar.open('Uspešno obrisan student', 'U redu', { duration: 2000 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu', { duration: 1000 });
  }

  compareTo(a, b) {
    return a.id === b.id;
  }

}
