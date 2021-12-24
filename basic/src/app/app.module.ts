import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common'

import { AppRoutingModule } from './app-routing.module'
import { ErrorMetadataService } from './error-metadata.service'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, AppRoutingModule],
  providers: [
    { provide: ErrorHandler, useClass: ErrorMetadataService },
    { provide: APP_BASE_HREF, useValue: '/basic' }, // programmatically set base href
    { provide: LocationStrategy, useClass: HashLocationStrategy } // http://localhost:4200/#/basic/
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
