import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {
  transform(value: number, value_two: number): string {
    let operaciones =
      `Suma: ${value + value_two}<br>` +
      `Resta: ${value - value_two}<br>` +
      `Multiplicacion: ${value * value_two}<br>` +
      `Division: ${value / value_two}`;

    return operaciones;
  }
}
