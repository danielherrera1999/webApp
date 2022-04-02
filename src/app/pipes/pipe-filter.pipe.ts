import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFilter'
})
export class PipeFilterPipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  transform(arreglo:any[],filter:string, columna:string):any[] {

    if(filter === ''){
      return arreglo;
    }
    filter=filter.toLowerCase().toString();

    return arreglo.filter( item=>{
      return item[columna].toLowerCase().includes(filter);
    })
  }


}
