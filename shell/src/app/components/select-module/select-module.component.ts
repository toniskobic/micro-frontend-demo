import { Component, Input, ViewContainerRef } from '@angular/core';
import { ModuleLoadSource } from 'src/app/enums/module-load-source.enum';
import { ModuleLazyLoaderService } from 'src/app/services/module-lazy-loader.service';

@Component({
  selector: 'app-select-module',
  templateUrl: './select-module.component.html',
  styleUrls: ['./select-module.component.scss'],
})
export class SelectModuleComponent {
  moduleLoadSource = ModuleLoadSource;

  @Input() container?: ViewContainerRef;

  constructor(private moduleLazyLoaderService: ModuleLazyLoaderService) {}

  loadLazyModule(moduleLoadSource: ModuleLoadSource): void {
    this.moduleLazyLoaderService.loadLazyModules(moduleLoadSource);
    this.container?.clear();
  }
}
