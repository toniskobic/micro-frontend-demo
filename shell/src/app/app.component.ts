import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SelectModuleComponent } from './components/select-module/select-module.component';
import { ModuleLazyLoaderService } from './services/module-lazy-loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  isLoaded = false;

  subscriptions: Subscription[] = [];

  constructor(private moduleLazyLoaderService: ModuleLazyLoaderService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.moduleLazyLoaderService.routeAdded$.subscribe(
        () => (this.isLoaded = true)
      )
    );
    const ref = this.container.createComponent(SelectModuleComponent);
    ref.setInput('container', this.container);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
    this.subscriptions = [];
  }
}
