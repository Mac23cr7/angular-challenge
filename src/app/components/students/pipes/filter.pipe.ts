import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultStudents = [];
    for(const data of value){
      if(data.name.toLowerCase().indexOf(arg.toLowerCase()) != -1){
        resultStudents.push(data);
      };
    };
    return resultStudents;
  }

}
