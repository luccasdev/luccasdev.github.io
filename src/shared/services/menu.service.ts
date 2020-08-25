import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  private menuOptions: Menu[] = [
    {
      type: MenuTypeEnum.ABOUT,
      label: 'Sobre',
      elementById: () => document.getElementById('about'),
      scrollIntoView: () => document.documentElement.scrollTo({
        behavior: 'smooth', top: 0
      })
    },
    {
      type: MenuTypeEnum.SKILLS,
      label: 'Skills',
      elementById: () => document.getElementById('skills'),
      scrollIntoView: () => document.documentElement.scrollTo({
        top: document.getElementById('skills').offsetTop - 50,
        behavior: 'smooth'
      })
    },
    {
      type: MenuTypeEnum.EXPERIENCE,
      label: 'Experiência',
      elementById: () => document.getElementById('experience'),
      scrollIntoView: () => document.documentElement.scrollTo({
        top: document.getElementById('experience').offsetTop - 50,
        behavior: 'smooth'
      })
    },
    {
      type: MenuTypeEnum.EXPERIENCE,
      label: 'Projetos',
      elementById: () => document.getElementById('projects'),
      scrollIntoView: () => document.documentElement.scrollTo({
        top: document.getElementById('projects').offsetTop - 50,
        behavior: 'smooth'
      })
    },
    {
      type: MenuTypeEnum.EXPERIENCE,
      label: 'Contato',
      elementById: () => document.getElementById('contact'),
      scrollIntoView: () => document.documentElement.scrollTo({
        top: document.getElementById('contact').offsetTop - 50,
        behavior: 'smooth'
      })
    }
  ];

  getMenuOptions(): Menu[] {
    return this.menuOptions;
  }
}


export class Menu {
  type: MenuTypeEnum;
  label: string;
  elementById: () => any;
  scrollIntoView: () => void;
}

export enum MenuTypeEnum {
  ABOUT,
  SKILLS,
  EXPERIENCE,
  PROJECTS,
  ARTICLES,
  CONTACT
}
