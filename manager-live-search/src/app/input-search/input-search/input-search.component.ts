import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  initialManagerValue: string = '';
  debounceTime = 500;
  @Output() finalTextToSearch = new EventEmitter<string>();
  @Output() showAllManagersData = new EventEmitter<string>();
  @Output() navigateUsingArrowKeys = new EventEmitter<string>();
  @Input() displayManagerName: any;
  @Input() managerSelectedFromDropdown: any;

  inputManagerValue = new Subject<string>();

  emitNewValue = this.inputManagerValue.pipe(
    debounceTime(this.debounceTime),
    distinctUntilChanged()
  );

  subscriptions: Subscription[] = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.managerSelectedFromDropdown){
      this.initialManagerValue = this.managerSelectedFromDropdown;
    }
  }

  ngOnInit() {
    const subscription = this.emitNewValue.subscribe(newValue => {
      this.finalTextToSearch.emit(newValue);
    });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onInputValue(e: any) {
    this.inputManagerValue.next(e.target.value);
  }

  showAllManagers(){
    this.showAllManagersData.emit("true");
  }

  hideManagers(event:any){
   if(event.relatedTarget == null){
     // managers data hides if the user loses focus from input field and does not click on select dropdown
      this.showAllManagersData.emit("false");
    } else if(event.relatedTarget.classList.contains('select-dropdown')){
      // managers data should not hide if the user loses focus from input field and clicks on select dropdown
      this.showAllManagersData.emit("true");
    }
  }
  
  onEnter(){
    // this shows manager name on input field on pressing enter key and hides the list of managers data
    this.initialManagerValue = this.displayManagerName[0].firstName + ' ' + this.displayManagerName[0].lastName;
    this.showAllManagersData.emit("false");
  }

  onSelection(manager: any){
    // this shows manager name on input field on selecting any option from dropdown and hides the list of managers data
    this.initialManagerValue = manager;
    this.showAllManagersData.emit("false");
  }

  navigateUsingKey(event: any){
    this.navigateUsingArrowKeys.emit(event);
  }

}
