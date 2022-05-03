## PROJECT'S TITLE : 
Manager Live Search

## DESCRIPTION :

1. Goal of the application : This application helps to filter the name of managers from a list in a dropdown. When the user clicks on input field, the whole list of managers appear. User can see only 2 manager names at a time. Other names are visible only when the user scrolls inside the list. When user types text in input field, the names of managers get filtered out, and only matching names appear in the list. User can also scroll in the dropdown list with the help of arrow up and arrow down keys. Once the user clicks enter on the selected or highlighted name in the list, the input field shows the full name of the manager, and the dropdown list is no more visible. Lastly, when the user enters a new text value and the input loses focus, the list of available or filtered managers is no more visible, and the entered value is kept. But when the user clicks back in the input field, the list of filtered manager kept by the entered value again gets visible.

2. Technologies used : I have used angular version 12, typescript, HTML and css to build this project. Several components are created using angular cli because it is a recommended and fast way to create new components and application.

3. How to install and run the project : 
Prerequisites to run this project are : 
 a. install node.js
 b. install angular cli (The Angular CLI installs the necessary Angular npm packages and other dependencies. This can take a few minutes.)
 c. use command 'npm install' to install the necessary Angular npm packages and other dependencies.
 d. use command 'ng serve' to run this application on local server.
 e. open link http://localhost:4200/ on any browser to check the application after running ng serve.

 4. Brief Explanation of what this application does and how:

  a. When a user runs this application on local server, user will see an input box.
  b. On clicking inside the input field, an api call using HttpClientModule in angular is made from parent component 'AppComponent', to get the data of all the managers at once. Basically, the input box is created inside a child component using another component called  'InputSearchComponent', and dropdown list is made in its parent component called 'AppComponent'.
  c. I have created child component called 'InputSearchComponent' to make the input search component losely coupled and reusable.
  d. The main purpose of 'InputSearchComponent' is to return the new text everytime the user enters in the input field, and on the basis of this text value, we will filter out the managers name in the dropdown list.
  e. So that the performance of the application remains great, I have used oberservable in order to return new value of the text everytime. But here the main part is, I have used rxJs operators debounceTime and distinctUntilChanged on the new observer value. 

        A look at what’s happening:

        1. When the input changes, the onInputValue method gets triggerd.
        2. This in return pushes the next value to the inputManagerValue observable.
        3. The inputManagerValue observable is piped through a debounceTime rxjs operator and a distinctUntilChanged operator. debounceTime helps us to only emit a new value once the user has stopped typing for a certain amount of time. I found 500ms to be a comfortable value for this. distinctUntilChanged helps to not emit anything if the previous value would be the same as the current value. So for example if the user changes x to y then back to x in under 500ms, there’s no new event.
        4. Once the trigger emits a new value, we emit it through the finalTextToSearch event emitter.
        5. onfinalTextToSearch method inside 'AppComponent' is used to check the conditions, if there is some new text entered, then the manager list is filtered out across firstName and lastName of managers, and this filtering is case insensitive as I have used toLowerCase method for firstName and lastName of managers and the input text value. If the user empties the text field, again the list of all managers will start appearing.

f. I have used select and option tags to loop on managers list and display the list in a dropdown in 'AppComponent'. Only 2 managers name can be seen at a time as I have used size = 2 property in select tag to limit the number of rows. To see the whole list, user needs to scroll down inside the list. If no manager name matches the input text value, then template showing noManagerFound is diplayed.

g. I have also implemented the functionality of arrow key up and arrow key down, i.e., the user can navigate the list of managers using arrow up and arrow down keys. I have used navigateUsingKey method for implementing this functionality. When user clicks on input field, navigateUsingKey method is called, this emits an navigateUsingArrowKeys event on parent component, where we navigate on managers list using keyCode of arrow up and arrow down keys, and highlight the name of manager accordingly. I update the name of highlighted manager using updateManagerName function and pass on this new value to the child component 'InputSearchComponent' using displayManagerName input property.

h. Once the user confirms the selection of manager using enter key, onEnter method is called after pressing the enter key, which updates the initialManagerValue,i.e, the value of manager on input field using displayManagerName input property. The list of available managers hides as I emit showAllManagersData event after updating the manager value on pressing enter key. displayAllManagersData method is called on the parent component on event emit of showAllManagersData, which is used to hide the data of available managers when input field gets updated.

i. If the user enters a text in input field and loses focus, the entered value is kept and a blur event is called using hideManagers method in 'InputSearchComponent'. This method emits showAllManagersData event, which is used to hide the list of managers using displayAllManagersData method in 'AppComponent'.

j. If the user again clicks back on the input field, the list of filtered managers again starts displaying using displayAllManagersData in 'AppComponent' with the kept text value.

k. I have also implemented onSelectingManager method in 'AppComponent'. This method is called, if the user navigates inside the managers list and selects a manager name by clicking on it. This method calls a method onSelection of 'InputSearchComponent' which is used to update the manager name in the input field and then emits showAllManagersData event to hide the available managers list.

l. Lastly, I have used ngOnDestroy method in both the components to cancel all the subscriptions to avoid memory leaks.



# ManagerLiveSearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.      

