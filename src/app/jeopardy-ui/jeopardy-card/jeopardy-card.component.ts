import { Component, OnInit, Input } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-jeopardy-card',
  templateUrl: './jeopardy-card.component.html',
  styleUrls: ['./jeopardy-card.component.scss']
})
export class JeopardyCardComponent implements OnInit {
  private _text: string;
  constructor() { }
  @Input() public set text(text: string) {
    !!text ? this._text = text: this._text = 'text not found'; 
  }

  public get text() {
    return this._text;

  }
  ngOnInit() {
  }

}
