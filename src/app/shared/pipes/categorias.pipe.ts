import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorias'
})
export class CategoriasPipe implements PipeTransform {

  transform(lista:any[] , num:number): any[] {
    
    if(!num) return lista;
    return lista.filter(prod => prod.idCategoria.includes(num));
    
  }

}
