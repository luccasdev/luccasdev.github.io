import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  showToggleMenu = false;
  menuTypes = MenuTypeEnum;
  selectedNavigationMenuType: MenuTypeEnum = MenuTypeEnum.ABOUT;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.showToggleMenu = !this.showToggleMenu;
  }

  changeNavigation(menuType: MenuTypeEnum) {
    this.selectedNavigationMenuType = menuType;
  }
}

export enum MenuTypeEnum {
  ABOUT,
  SKILLS,
  EXPERIENCE,
  PROJECTS,
  ARTICLES,
  CONTACT
}
