import { Component, Input, OnInit } from '@angular/core'
import { Card } from '../app.component'


@Component({
    selector: 'f7-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

    @Input() card?: Card

    ngOnInit() {

    }
}