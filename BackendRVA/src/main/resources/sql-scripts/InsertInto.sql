--smer
insert into smer(id, naziv, oznaka)
values(nextval('smer_seq'), 'Inženjerstvo informacionih sistema', 'IT');
insert into smer(id, naziv, oznaka)
values(nextval('smer_seq'), 'Informacioni inženjering', 'IN');
insert into smer(id, naziv, oznaka)
values(nextval('smer_seq'), 'Inženjerski menadžment', 'IM');
insert into smer(id, naziv, oznaka)
values(nextval('smer_seq'), 'Mehatronika', 'MH');

--projekat
insert into projekat(id, naziv, oznaka, opis)
values(nextval('projekat_seq'), 'Razvoj web aplikacije', 'WEB', NULL);
insert into projekat(id, naziv, oznaka, opis)
values(nextval('projekat_seq'), 'Projektovanje šeme baz podataka nekog informacionog sistema', 'PBP', NULL);
insert into projekat(id, naziv, oznaka, opis)
values(nextval('projekat_seq'), 'Robotizovani sistemi i njihova primena u industriji', 'RSI', NULL);
insert into projekat(id, naziv, oznaka, opis)
values(nextval('projekat_seq'), 'Veštačka inteligencija i mašinsko učenje', 'VIM', NULL);

--grupa
insert into grupa(id, oznaka, smer)
values(nextval('grupa_seq'), 'Grupa 1', 1);
insert into grupa(id, oznaka, smer)
values(nextval('grupa_seq'), 'Grupa 2', 2);
insert into grupa(id, oznaka, smer)
values(nextval('grupa_seq'), 'Grupa 3', 3);
insert into grupa(id, oznaka, smer)
values(nextval('grupa_seq'), 'Grupa 4', 4);

--student
insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(nextval('student_seq'), 'Petar', 'Petrović', '2/2017', 1, 1);
insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(nextval('student_seq'), 'Jovan', 'Jovanović', '58/2017', 2, 1);

insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(nextval('student_seq'), 'Marko', 'Marković', '18/2017', 3, 2);
insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(nextval('student_seq'), 'Pavle', 'Pavlović', '22/2017', 4, 2);

insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(nextval('student_seq'), 'Maja', 'Marić', '78/2017', 3, 3);
insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(nextval('student_seq'), 'Jana', 'Vasić', '6/2017', 4, 3);

insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(nextval('student_seq'), 'Ilija', 'Ilić', '33/2017', 1, 4);
insert into student(id, ime, prezime, broj_indeksa, grupa, projekat)
values(nextval('student_seq'), 'Ivana', 'Jelić', '62/2017', 2, 4);
