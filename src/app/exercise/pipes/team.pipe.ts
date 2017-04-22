import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teampipe'
})

export class TeamPipe implements PipeTransform{
  transform(inputArray: any, params: string){
    return inputArray.filter((res: any) => 
      res.team === params
    )
  }
}