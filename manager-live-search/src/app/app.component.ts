import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ManagerService } from './app.service';
import { InputSearchComponent } from './input-search/input-search/input-search.component';

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
  selectedManager: any;
  managerSelectedFromDropdown: any;
  linkIndex = 0;
  searchedManagersSubscriptionData: Subscription[] = [];

  constructor(
    private managerService: ManagerService,
    private inputSearchComponent : InputSearchComponent
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
        this.selectedManager = this.filteredManagers;
     }
   
  }

  getManagersData(){
    this.managers = this.allManagers.data.map((item: any,index : any) =>{
        let newManagerData = {
          fullName : "",
          firstName : "",
          lastName : ""
        }
        newManagerData.fullName = item.attributes.firstName+ ' ' + item.attributes.lastName;
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
      this.hideManagersData = false;
    } else if(e === 'false'){
      // this is used to hide list of available managers when input field loses focus
      this.hideManagersData = true;
    } else if(e === 'true' && this.newText != null){
      // this is used to show the list of filtered managers again when user clicks back to the input field with the kept text
      this.filteredManagers = this.filteredManagers;
      this.selectedManager = this.filteredManagers;
      this.hideManagersData = false;
    }
  }

  onSelectingManager(manager: any){
    // on selecting manager name from dropdown via click or enter key, the name starts displaying on the input field
    if(typeof(manager) == 'object'){
      this.managerSelectedFromDropdown = manager[0].firstName + ' ' + manager[0].lastName;
    } else{
      this.managerSelectedFromDropdown = manager;
    }
    // this.inputSearchComponent.onSelection(this.selectedManager);
    this.inputSearchComponent.onSelection(this.managerSelectedFromDropdown);
    this.hideManagersData = true;
  }

  updateManagerName(linkIndex: number){
    let filterValue = this.filteredManagers.filter((manager: any,index: any) => {
      if(index === linkIndex){
        return manager;
      }
    });
    this.selectedManager = filterValue;
  }

  navigateUsingArrowKeys(event: any){
    switch (event.keyCode) {
      case 38: // this is the ascii of arrow up        
        this.linkIndex === -1 ?  this.linkIndex = 0 : this.linkIndex-- ;
      
        // calls when DOWN key press...
        this.linkIndex === -1 ? (this.linkIndex = this.filteredManagers.length - 1) : '';
        this.updateManagerName(this.linkIndex);
      break;

      case 40: // this is the ascii of arrow down
       // calls when UP key press...
       this.filteredManagers.length-1 <= this.linkIndex ? (this.linkIndex = -1) : '';
        this.linkIndex++;
        this.updateManagerName(this.linkIndex);
      break;       
  }
  }

  ngOnDestroy() {
    this.managersDataSubscription.unsubscribe();
  }
}
