import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOne'
})
export class FilterPipeOne implements PipeTransform {

  transform(value: any, searchValue): any {

    if (!searchValue) return value;
    return value.filter((v) => v.img.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.first.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.last.toLowerCase().indexOf(searchValue.toLowerCase()) > -1|| v.email.toLowerCase().indexOf(searchValue.toLowerCase()) > -1|| v.phone.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

  }

}