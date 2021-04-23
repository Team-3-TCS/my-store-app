import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persons } from 'src/app/mock/person.mock';
import { Persona } from '../models/persona.model';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  persons: Persona[];
  person: Persona;

  constructor(private http: HttpClient) {}

  getAllPersons() {
    return this.http.get<Persona[]>(environment.ip + '/persona');
  }

}
