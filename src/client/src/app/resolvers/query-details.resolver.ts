import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { EntityProxyMapper } from '@models/entity-proxy-mapper';
import { IentityType } from '@modules/interfaces/ientity-type';

export const queryDetailsResolver: ResolveFn<IentityType> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return EntityProxyMapper.getEntityTypeDetails(route.queryParams['name']);
};
