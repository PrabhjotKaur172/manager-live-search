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
  filteredManagers: any;
  managersDataSubscription: any;
  newText: any;
  hideManagersData: boolean = false;
  searchedManagersSubscriptionData: Subscription[] = [];

  constructor(
    private managerService: ManagerService
    ) {}

    ngOnInit() {
      // this is to get the list of all managers from api
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
     //this method is used to show the list of managers according to the input text entered in the field
     this.newText = newText;
     if(newText == ""){
        this.filteredManagers = [...this.managers];
     } else {
        this.filteredManagers = this.managers.filter( (name: any) => {
          // the lowercasing is done to make the filtering case insensitive
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
    this.filteredManagers = [...this.managers];
  }

  displayAllManagersData(e: any){
    if(e === 'true' && this.newText == null){
      // this is to show the list of all the managers when the user clicks first time and there is not input text entered
      this.getManagersData();
    } else if(e === 'false'){
      // this is used to hide list of available managers when input field loses focus
      this.hideManagersData = true;
    } else if(e === 'true' && this.newText != null){
      // this is used to show the list of filtered managers again when user clicks back to the input field with the kept text
      this.filteredManagers = this.filteredManagers;
      this.hideManagersData = false;
    }
  }

  ngOnDestroy() {
    this.managersDataSubscription.unsubscribe();
  }
}
