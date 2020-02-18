import { Component, OnInit , OnDestroy } from '@angular/core';
import { Observable, Subscription, Subscriber } from 'rxjs';
import { retry , map, filter} from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { 

        this.subscription = this.regresarObservable()
        .subscribe( 
          numero =>  console.log('subs', numero),
          error =>  console.error('subs', error),
          () => console.log('El obs termino'),        
          
        );

  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('La pagina cierra');
    this.subscription.unsubscribe();
  }

  regresarObservable(): Observable<any>  {

    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;
      
      const intervalo = setInterval( () => {

        contador ++;

        const salida = {
          valor: contador
        };

        observer.next( salida );

        // if( contador === 3 ) {
        //   clearInterval (intervalo)
        //   observer.complete();
        // }
      },1000);

    }).pipe( 
      map( resp => resp.valor ),
          filter( ( valor, index ) => {

              if( (valor % 2) === 1 ){
                //impar
                return true;
              }else {
                //par}
                return false;
              }
          })
        )

  }

}
