import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'my-app',
  template: `<ngx-select  
              [formControl]="selectControl"
              [allowClear]="true" 
              [items]="selectItems" 
              optionValueField="optionId"
              optionTextField="optionTitle" 
              placeholder="Select...">
            </ngx-select>
            Look at the console!`
})
export class AppComponent {
  public selectControl = new FormControl();
  public selectItems = [
    { optionId: 1, optionTitle: 'option 1' },
    { optionId: 2, optionTitle: 'option 2' },
    { optionId: 3, optionTitle: 'option 3' },
    { optionId: 4, optionTitle: 'option 4' },
    { optionId: 5, optionTitle: 'option 5' },
    { optionId: 6, optionTitle: 'option 6' },
    { optionId: 7, optionTitle: 'option 7' },
    { optionId: 8, optionTitle: 'option 8' },
    { optionId: 9, optionTitle: 'option 9' },
    { optionId: 10, optionTitle: 'option 10' },
    { optionId: 11, optionTitle: 'option 11' },
    { optionId: 12, optionTitle: 'option 12' },
    { optionId: 13, optionTitle: 'option 13' },
    { optionId: 14, optionTitle: 'option 14' },
    { optionId: 15, optionTitle: 'option 15' },
    { optionId: 16, optionTitle: 'option 16' },
    { optionId: 17, optionTitle: 'option 17' },
    { optionId: 18, optionTitle: 'option 18' },
    { optionId: 19, optionTitle: 'option 19' },
    { optionId: 20, optionTitle: 'option 20' },
  ];

  ngOnInit(): void {
    this.selectControl.valueChanges
      .subscribe((subscriptionTypeId: number) => {
        const obj = this.selectItems.find(item => item.optionId === subscriptionTypeId);
        console.log(
          'subscriptionTypeId', subscriptionTypeId, obj
        );
      });
  }
}
