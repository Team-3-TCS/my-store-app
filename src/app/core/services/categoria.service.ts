import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Categoria } from '../models/categoria.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get<Categoria[]>(environment.ip + '/categoria');
  }

  getCategory(id) {
    return this.http.get<Categoria>(environment.ip + '/categoria/' + id);
  }
}
