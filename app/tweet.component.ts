import {Component,Input} from '@angular/core';
import {Tweet} from './tweet';


@Component ({
    selector: 'tweetcomponent',
    template : ` 
    tweets {{data.imageUrl}}
    `})

export class TweetComponent{
    @Input() data:Tweet; 

}