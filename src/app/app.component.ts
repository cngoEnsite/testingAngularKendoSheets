import { Component } from '@angular/core';
import {
  SheetDescriptor,
  SpreadsheetMainMenuItem,
} from '@progress/kendo-angular-spreadsheet';
import { sheets } from './sheets';

@Component({
  selector: 'my-app',
  template: `
        <kendo-spreadsheet
            [sheets]="sheets"
            activeSheet="Food Order"
            [menuItems]="items"
            style="height: 600px; width: 100%"
        >
        </kendo-spreadsheet>
    `,
})
export class AppComponent {
  public sheets: SheetDescriptor[] = sheets;
  public items: SpreadsheetMainMenuItem[] = [
    { id: 'home' },
    { id: 'insert' },
    { id: 'file', active: true },
  ];
}
