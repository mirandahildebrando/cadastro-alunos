import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media',
  standalone: true
})
export class MediaPipe implements PipeTransform {

  transform(Aluno: any): number {
    return (Aluno.nota1 + Aluno.nota2) / 2;
  }

}
