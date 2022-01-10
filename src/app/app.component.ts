import { Title } from '@angular/platform-browser'
import { Component, HostBinding, Inject, OnInit } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import Framework7 from 'framework7'
import Popup from 'framework7/components/popup'
import Panel from 'framework7/components/panel'
import Routes from 'framework7/modules/router'

Framework7.use([Popup, Panel, Routes]);

export interface Card {
    image: string,
    name: string,
    price: number,
    subtitle: string,
    description: string
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit 
{

    constructor(@Inject(DOCUMENT) private document: Document, title: Title) {
        title.setTitle('Gel Store');
    }

    
    stringifiedData: any;
    panel: boolean = true;
    title = 'gelstore';
    datetime = (new Date()).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
    
    cards: Card[] = [
        {
            image: 'https://randomuser.me/api/portraits/women/66.jpg',
            name: 'Jenny Walker',
            price: 15,
            subtitle: 'Beatles',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.'
        },
        {
            image: 'https://randomuser.me/api/portraits/women/96.jpg',
            name: 'Cindy Boyd',
            price: 14,
            subtitle: 'Brisbane',
            description: 'Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.'
        },
        {
            image: 'https://randomuser.me/api/portraits/women/31.jpg',
            name: 'Martyna Sogn',
            price: 16,
            subtitle: 'Råkvågen',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.'
        },
    ]

    @HostBinding('class.theme-dark')
    themeDarkClass: boolean = true;

    @HostBinding('class.theme-light')
    themeLightClass: boolean = false;

    onChangeTheme() {
        this.themeDarkClass = !this.themeDarkClass
        this.themeLightClass = !this.themeLightClass
        this.panel = !this.panel
    }

    ngOnInit() {
        this.document.documentElement.lang = 'ee';
        this.stringifiedData = new Framework7({
            el: '#app',
            name: 'My App',
            id: 'com.myapp.gelstore',
            panel: {
                swipe: true,
            },
            popup: {
                swipeToClose: true,
            },
            theme: 'md',
            // var mainView = myApp.addView('.view-main', {
            //     dynamicNavbar: true
            // }),
            routes: [
                {
                    name: 'about',
                    path: '/about',
                    url: '../../pages/about.html',
                    component: []
                }
            ]
        });
    }
}
