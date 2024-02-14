import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SpreadsheetModule } from '@progress/kendo-angular-spreadsheet';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserAnimationsModule, FormsModule, SpreadsheetModule],
})
export class AppModule {}
