import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route, RouterEvent } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {

  constructor() { }
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      console.log('Preloaded: ' + route.path)
      return load()
    }
    return of(null)
  }
}
