import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ActivatorOfflineService } from '../services/activator-offline.service';

export const isOfflineGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const activatorOfflineSvc = inject(ActivatorOfflineService);
  if (activatorOfflineSvc.getIsOffline()) return true;
  return router.navigate(['']);
};
