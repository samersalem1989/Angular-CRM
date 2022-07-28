import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchValue): any {

    if (!searchValue) return value;
    return value.filter((v) => v.first.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.last.toLowerCase().indexOf(searchValue.toLowerCase()) > -1|| v.email.toLowerCase().indexOf(searchValue.toLowerCase()) > -1|| v.address.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
    
  }

}