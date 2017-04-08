import {
    Component,
    Input,
    ViewChild,
    ElementRef,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @Input() name: string;
  @ViewChild('getName') getName: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  // Ovaj hook mora da ima changes parametar, i opaljuje kad god se nesto promeni, npr. input
  ngOnChanges(changes: SimpleChanges) { // it is called every time when something is changes
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() { // it is called after every initialization, basicaly for every child component at least
    console.log('ngOnInit called!');
    console.log(this.getName.nativeElement.textContent); // here we can't access dom element values
  }

  ngDoCheck() { // it is called every time when something is changes
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {  // it is called just once per child component
    console.log('ngAfterContentInit called!');
    console.log(this.getName.nativeElement.textContent); // here we can't access dom element values
  }

  ngAfterContentChecked() {
     console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {  // it is called just once per child component
      console.log('ngAfterViewInit called!');
    console.log(this.getName.nativeElement.textContent);  // only here we can access values from the DOM
  }

  ngAfterViewChecked() {
     console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
