import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private navbarItems;
  private navbarIcons;

  constructor() {
    this.fillNavbarItems();
    this.fillNavbarIcons();
  }

  todayDate() {
    const ndate = new Date();
    return ndate;
  }

  getNavbarItems() {
    return this.navbarItems;
  }

  getNavbarIcons() {
    return this.navbarIcons;
  }

  private fillNavbarItems() {
    this.navbarItems = [
      { link: '/percelen', label: 'Percelen' },
      { link: '/dossiers', label: 'Dossiers' },
      { link: '/rapportages', label: 'Rapportages' },
      { link: '/klic-meldingen', label: 'Klic Meldingen' },
    ];
  }

  private fillNavbarIcons() {
    this.navbarIcons = [
      { link: '/settings', name: 'settings_applications' },
      { link: '/info', name: 'info' },
      { link: '/account', name: 'perm_identity' },
    ];
  }
}
