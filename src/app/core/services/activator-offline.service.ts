import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivatorOfflineService {
  private isOffline = false;
  
  getIsOffline() {
    return this.isOffline;
  }

  activateOffline() {
    this.isOffline == true;
  }
}
