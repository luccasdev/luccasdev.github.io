import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Menu, MenuService} from '../../../shared/services/menu.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {

  showToggleMenu = false;

  menuOptions: Menu[] = [];

  @Input()
  selectedNavigationMenu: Menu;

  @Output()
  changeNavigationEvent = new EventEmitter<Menu>();

  constructor(private menuService: MenuService) {
    this.menuOptions = menuService.getMenuOptions();
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.showToggleMenu = !this.showToggleMenu;
  }

  changeNavigation(menu: Menu) {
    this.selectedNavigationMenu = menu;
    this.changeNavigationEvent.emit(menu);
    this.toggleMenu();
  }

}

