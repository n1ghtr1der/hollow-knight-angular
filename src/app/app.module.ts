import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccessibilityBarComponent } from './accessibility-bar/accessibility-bar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PageContentComponent } from './page-content/page-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessibilityBarComponent,
    NavigationBarComponent,
    PageContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
