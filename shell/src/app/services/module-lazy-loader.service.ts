import { Injectable } from '@angular/core';
import { LoadChildrenCallback, Router } from '@angular/router';
import { Observable, of, delay, tap, Subject } from 'rxjs';
import { ModuleLoadSource } from '../enums/module-load-source.enum';

@Injectable({
  providedIn: 'root',
})
export class ModuleLazyLoaderService {
  private routeAddedSource = new Subject<void>();
  routeAdded$ = this.routeAddedSource.asObservable();

  constructor(private router: Router) {}

  loadLazyModules(moduleLoadSource: ModuleLoadSource) {
    const module =
      moduleLoadSource === ModuleLoadSource.Shell
        ? () =>
            import('src/app/modules/demo/demo.module').then((m) => m.DemoModule)
        : () => import('mfe1/Module').then((m) => m.DemoModule);

    const config = this.router.config;

    config.push({
      path: 'demo',
      loadChildren: module,
    });
    this.routeAddedSource.next();
    this.router.resetConfig(config);
  }
}
