import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class ArraySortPipe  implements PipeTransform {
  transform(array: any, field: string): any[] {
    
    array.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        console.log("1");
        console.log(a[field], b[field]);
        return -1;
      } else if (a[field] < b[field]) {
        console.log("2");
        console.log(a[field], b[field]);
        console.log("----")
        return 1;
      } else {
        console.log("3");

        return 0;
      }
    });
    return array;
  }
}