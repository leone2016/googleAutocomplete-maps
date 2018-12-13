
CURSO
===================
![](https://github.com/leone2016/googleAutocomplete-maps/blob/master/default.png?raw=true)

#### Páginas consultadas 
[angular.material](https://material.angular.io/components/input/examples)

[angular.maps](https://angular-maps.com/api-docs/agm-core/components/agmmap#mapClick)

[google.autocomplete](https://hackernoon.com/custom-directives-in-angular-6-building-a-google-places-autocomplete-4b418ee674ce)

[errores](https://stackoverflow.com/questions/36064697/how-to-install-typescript-typings-for-google-maps/42733315?noredirect=1#comment88303107_42733315)


## Receta para utilizar el autocomplete de google 
Paso 1: obtener una api key de google para maps [aquí](https://cloud.google.com/maps-platform/), en la versión actual solicita una tarjeta de credito o debito para poder utilizar los servicios de google, es recomendable ingresar una tarjeta de debito cualquiera, solo para poder obtener el api key de google

Paso 2: npm i --save-dev @types/googlemaps

Paso 3: creamos todo lo necesario como> componentes

paso 4: copiar este codigo y css al gusto

```HTML
    <div style="text-align:center">
      <h1>
        Welcome to {{ title }}!
      </h1>
      <img width="300" alt="Angular Logo">
    </div>
    <div class="input-container">
      <input 
        type="text"
        class="google-place-input"
        placeholder="Type to search..">
    </div>
```

paso 5: crear una directiva en consola ``` ng g d google-places```

paso 6: copiar el siguiente codigo en la nueva directiva y notese que que se cambio ``` selector: '[google-place]' ```

```TS
  import { Directive, ElementRef, OnInit } from '@angular/core';
  const google = require('@types/googlemaps');
  
  @Directive({
    selector: '[google-place]'
  })
  export class GooglePlacesDirective implements OnInit {
    private element: HTMLInputElement;
  
    constructor(private elRef: ElementRef) {
      //elRef will get a reference to the element where
      //the directive is placed
      this.element = elRef.nativeElement;
    }
  
    ngOnInit() {
      const autocomplete = new google.maps.places.Autocomplete(this.element);
    }
  
  }
```
paso 7: copiar el link de google maps en el index.html con la respectiva api key de google maps

```HTML
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places" async defer></script>
```
paso 8: agregar la directiva (google-place) al html, así. hasta aqui ya debería funcionar el autocomplete de Google, si te da error ve al paso 9

```HTML
<input
google-place
type="text"
class="google-place-input"
placeholder="Type to search..">
```
paso 9: solución a problemas de versiones para angular 5^

> si ves este error, vamos hacer algunos cambios
```prolog
ERROR in ./src/app/prestadores/google-directive/google-places.directive.ts
Module not found: Error: Can't resolve '@types/googlemaps' in 'C:\Users\User\Documents\baytec\armonix\modulo-consultas\front-api\src\app\prestadores\google-directive'
 @ ./src/app/prestadores/google-directive/google-places.directive.ts 11:13-41
 @ ./src/app/prestadores/prestadores.module.ts
 @ ./src/app/app.module.ts
 @ ./src/main.ts
 @ multi webpack-dev-server/client?http://localhost:4400 ./src/main.ts

```
  * ir al directorio node_modules/@types/googlemaps/index.d.ts
  * agregar lo siguiente ``` declare module 'googlemaps'; ``` 
  * en la directiva aumentar  ````import {} from 'googlemaps';```` y quedaría de esta forma
  ```TS
  import { Directive } from '@angular/core';
  // const google = require('@types/googlemaps');
  import {} from 'googlemaps';
  @Directive({
    selector: '[google-place]'
  })
  export class GooglePlacesDirective {
  
      private element: HTMLInputElement;
  
      constructor(private elRef: ElementRef) {
          //elRef will get a reference to the element where
          //the directive is placed
          this.element = elRef.nativeElement;
      }
  
      ngOnInit() {
          const autocomplete = new google.maps.places.Autocomplete(this.element);
      }
  
  }

  ```




> Cannot find name 'require'  

npm install --save-dev @types/googlemaps

>ng g module material --flat

>ng g c components/mapa --module=app.module --spec=false 

>npm install @agm/core --save  [More info ... ](https://angular-maps.com/guides/getting-started/)

> ng g c components/mapa/mapa-editar --flat --spec=false --module=app.module

> ng g d components/mapa/google-places --module=app.module

> npm i --save-dev @types/googlemaps
