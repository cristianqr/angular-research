import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value.length > 10){
      return value.substring(0, 10) + '...';
    }
    return value;
  }

}
