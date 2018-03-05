import { Component, OnInit, Input } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'global-home-page',
  templateUrl: './global-home-page.component.html',
  styleUrls: ['./global-home-page.component.css'],
  providers: [NgbAlertConfig]
})
export class GlobalHomePageComponent implements OnInit {
  
  private _success = new Subject<string>();

  @Input() staticAlertClosed = false;
  @Input() successMessage: string;
  @Input() showSuccessMessage:boolean;
  @Input() showErrorMessage:boolean;
  @Input() errorMessage: string;

  constructor() {
    console.log('document');
    document.addEventListener("offline", this.onOffline, false);
    document.addEventListener("online", this.onOnline, false);
    document.addEventListener("batterylow", this.onBatteryLow, false);
   }

   onBatteryLow(status) {
        alert("Battery Level Low " + status.level + "%");
   }

   onOffline(){
     console.log('offline');
     this.showSuccessMessage = false;
     this.showErrorMessage=true;
     this.successMessage = "";
    alert("Application is in offline mode. Please try again..!");
   }

   onOnline(){
     console.log('online');
     this.showSuccessMessage = true;
     this.showErrorMessage=false;
     this.errorMessage = "";
     alert("Application is in online.");
   }

  ngOnInit() {
    console.log('on init');
  }

}
