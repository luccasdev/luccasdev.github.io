import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {Menu, MenuService} from '../shared/services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'luccasdev';


  menuOptions: Menu[] = [];
  specificMenu: Menu;


  constructor(private menuService: MenuService) {
    this.menuOptions = menuService.getMenuOptions();
    this.specificMenu = this.menuOptions[0];
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.checkView();
  }

  checkView() {
    this.menuOptions.forEach(menu => {
      if (this.checkIfElementIsWithinViewport(menu.elementById())) {
        this.specificMenu = menu;
      }
    });
  }

  checkIfElementIsWithinViewport(element) {
    if (element) {
      const elementOffsets = element.getBoundingClientRect();
      if (document.documentElement.scrollTop < 100) {
          this.specificMenu = this.menuOptions[0];
          return;
      }
      return elementOffsets.bottom > 0 &&
        elementOffsets.right > 0 &&
        elementOffsets.left < (window.innerWidth || document.documentElement.clientWidth) &&
        elementOffsets.top + 500 < (window.innerHeight || document.documentElement.clientHeight);
    } else {
      return false;
    }
  }

  onChangeNavigation(selectedMenu: Menu) {
    selectedMenu.scrollIntoView();
  }

}
