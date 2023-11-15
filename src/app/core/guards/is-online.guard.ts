import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { ActivatorOfflineService } from '../services/activator-offline.service';

export const isOnlineGuard: CanActivateChildFn = (route, state) => {
  const router = inject(Router)
  const activatorOfflineSvc = inject(ActivatorOfflineService);
  if (navigator.onLine) {
    return true
  };
  activatorOfflineSvc.activateOffline();
  return router.navigate(['offline']);
};
