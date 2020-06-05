import { Projekat } from './projekat';
import { Grupa } from './grupa';

export class Student {
  id: number;
  ime: string;
  prezime: string;
  broj_indeksa: string;
  grupa: Grupa;
  projekat: Projekat;
}
