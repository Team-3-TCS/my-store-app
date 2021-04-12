import { Injectable } from '@angular/core';
import { Persons } from 'src/app/mock/person.mock';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  persons: Persona[] = Persons;

  constructor() {}

  getPersonEmail(email: string): Persona {
    return this.persons.filter((p) => p.correo == email)[0];
  }
}
