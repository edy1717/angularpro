import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() { 

    let obs = new Observable( observer => {

      let contador = 0;
      
      const intervalo = setInterval( () => {

        contador ++;

        observer.next( contador );

        if( contador === 3 ) {
          clearInterval (intervalo)
          observer.complete();
        }

        if (contador === 2) {
          // clearInterval (intervalo)
          observer.error('help')
        }

      },1000);

    });

        obs.pipe(
          retry()
        )
        .subscribe( 
          numero =>  console.log('sus', numero),
          error =>  console.error('sus', error),
          () => console.log('El obs termino'),        
          
        );

  }

  ngOnInit() {
  }

}
