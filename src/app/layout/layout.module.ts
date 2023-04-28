import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    ContentComponent,
    FooterComponent,
    LayoutComponent,
    CounterButtonComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
