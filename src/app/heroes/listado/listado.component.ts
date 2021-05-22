import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ["one", "two", "three", "four"]
  heroeBorrado: string = ""

  borrarItem() {
    this.heroeBorrado = this.heroes.pop() || ""
  }
}
