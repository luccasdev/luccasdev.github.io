import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  scrollTopPosition = 0;

  @Output() scrollChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onScroll(event: any) {
    this.scrollTopPosition = event.target.scrollTop;
    this.scrollChange.emit(event.target.scrollTop);
  }
}
