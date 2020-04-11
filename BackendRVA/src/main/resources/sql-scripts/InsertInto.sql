--smer
insert into smer(id, naziv, oznaka)
values(nextval('smer_seq'), 'Inženjerstvo informacionih sistema', 'IT');
insert into smer(id, naziv, oznaka)
values(nextval('smer_seq'), 'Informacioni inženjering', 'IN');
insert into smer(id, naziv, oznaka)
values(nextval('smer_seq'), 'Inženjerski menadžment', 'IM');
insert into smer(id, naziv, oznaka)
values(nextval('smer_seq'), 'Mehatronika', 'MH');

insert into smer(id, naziv, oznaka)
values(-100, 'naziv Test', 'oznaka Test');

--projekat
insert into projekat(id, naziv, oznaka, opis)
values(nextval('projekat_seq'), 'Razvoj web aplikacije', 'WEB', NULL);
insert into projekat(id, naziv, oznaka, opis)
values(nextval('projekat_seq'), 'Projektovanje šeme baze podataka nekog informacionog sistema', 'PBP', NULL);
insert into projekat(id, naziv, oznaka, opis)
values(nextval('projekat_seq'), 'Big data i analitika', 'BDA', NULL);
insert into projekat(id, naziv, oznaka, opis)
values(nextval('projekat_seq'), 'Veštačka inteligencija i mašinsko učenje', 'VIM', NULL);

insert into projekat(id, naziv, oznaka, opis)
values(-100, 'Naziv Test', 'Test', NULL);
	   
insert into projekat(id, naziv, oznaka, opis)
values(nextval('projekat_seq'), 'Razvoj android aplikacije', 'MIT', NULL);
insert into projekat(id, naziv, oznaka, opis)
values(nextval('projekat_seq'), 'Upotreba mašinskog učenja', 'OSPI', NULL);
insert into projekat(id, naziv, oznaka, opis)
values(nextval('projekat_seq'), 'Primena poslovne inteligencije u elektronskom poslovanju', 'PIEP', NULL);
insert into projekat(id, naziv, oznaka, opis)
values(nextval('projekat_seq'), 'Robotizovani sistemi i njihova primena u industriji', 'RSI', NULL);

--grupa
insert into grupa(id, oznaka, smer)
values(nextval('grupa_seq'), 'Grupa 1', 1);
insert into grupa(id, oznaka, smer)
values(nextval('grupa_seq'), 'Grupa 2', 2);
insert into grupa(id, oznaka, smer)
values(nextval('grupa_seq'), 'Grupa 3', 3);
insert into grupa(id, oznaka, smer)
values(nextval('grupa_seq'), 'Grupa 4', 4);

insert into grupa(id, oznaka, smer)
values(-100, 'Test', 4);

--student
insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(nextval('student_seq'), 'Petar', 'Petrović', '2/2017', 1, 1);
insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(nextval('student_seq'), 'Jovan', 'Jovanović', '58/2017', 1, 2);

insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(nextval('student_seq'), 'Marko', 'Marković', '18/2017', 2, 3);
insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(nextval('student_seq'), 'Pavle', 'Pavlović', '22/2017', 2, 4);

insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(nextval('student_seq'), 'Maja', 'Marić', '78/2017', 3, 5);
insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(nextval('student_seq'), 'Jana', 'Vasić', '6/2017', 3, 6);

insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(nextval('student_seq'), 'Ilija', 'Ilić', '33/2017', 4, 7);
insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(nextval('student_seq'), 'Ivana', 'Jelić', '62/2017', 4, 8);

insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(-100, 'Test ime', 'Test prezime', '20/2020', 4, 8);
