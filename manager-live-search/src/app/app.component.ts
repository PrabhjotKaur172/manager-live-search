import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ManagerService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'manager-live-search';
  allManagers: any;
  managers: any;
  useThisOnHtmlManagers: any;
  managersDataSubscription: any;
  searchedManagersSubscriptionData: Subscription[] = [];

  constructor(
    private managerService: ManagerService
    ) {}

    ngOnInit() {
      this.managersDataSubscription = this.managerService.getManagersData().subscribe(
        response => {
          this.allManagers = response;
        },
        errorResponse => {
          alert("There is an error when calling managers api.");
          console.error(errorResponse);
        }
      );
    }

   onfinalTextToSearch(newText: string) {
     if(newText == ""){
        this.useThisOnHtmlManagers = [...this.managers];
     } else {
        this.useThisOnHtmlManagers = this.managers.filter( (name: any) => {
          let firstNameLowercase = name.firstName.toLowerCase();
          let lastNameLowercase = name.lastName.toLowerCase();
          let newTextLowercase = newText.toLowerCase();
          if((firstNameLowercase+lastNameLowercase).includes(newTextLowercase)){
            return name;
          }
        });
     }
   
  }

  getManagersData(){
    this.managers = this.allManagers.data.map((item: any) =>{
        let newManagerData = {
          firstName : "",
          lastName : ""
        }
        newManagerData.firstName = item.attributes.firstName;
        newManagerData.lastName = item.attributes.lastName;
        return newManagerData;
    });
    this.useThisOnHtmlManagers = [...this.managers];
  }

  displayAllManagersData(e: any){
    if(e === 'true'){
      this.getManagersData();
    }
  }

  ngOnDestroy() {
    this.managersDataSubscription.unsubscribe();
  }
}
