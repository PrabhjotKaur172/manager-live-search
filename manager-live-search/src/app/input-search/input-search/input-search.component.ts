import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  initialManagerValue: string = '';
  debounceTime = 1000;
  @Output() finalTextToSearch = new EventEmitter<string>();
  @Output() showAllManagersData = new EventEmitter<string>();

  inputManagerValue = new Subject<string>();

  emitNewValue = this.inputManagerValue.pipe(
    debounceTime(this.debounceTime),
    distinctUntilChanged()
  );

  subscriptions: Subscription[] = [];

  constructor() {
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

}
