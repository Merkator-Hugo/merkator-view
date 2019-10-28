import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private state: StateService ) { }

  paneLeftOpen: boolean;
  paneRightOpen: boolean;
  bottomOpen: boolean;
  today: string;
  title: string;
  navbarItems;
  navbarIcons;

  ngOnInit() {
    this.paneLeftOpen = false;
    this.paneRightOpen = false;
    this.bottomOpen = false;
    this.today = this.state.todayDate().toLocaleDateString();
    this.title = 'Merkator';
    this.navbarItems = this.state.getNavbarItems();
    this.navbarIcons = this.state.getNavbarIcons();
  }

  public toggleLeftPane() {
    this.paneLeftOpen = ! this.paneLeftOpen;
  }

  public toggleRightPane() {
    this.paneRightOpen = !this.paneRightOpen;
  }

  public toggleBottom() {
    this.bottomOpen = !this.bottomOpen;
  }

  public openLeftPane() {
    this.paneLeftOpen = true;
  }

  public closeLeftPane() {
    this.paneLeftOpen = false;
  }

  public openRightPane() {
    this.paneRightOpen = true;
  }

  public closeRightPane() {
    this.paneRightOpen = false;
  }

}
