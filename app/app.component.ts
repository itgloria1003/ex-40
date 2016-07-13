import {Component} from '@angular/core';
import {TweetComponent} from './tweet.component';
import {TweetService} from './tweet.service';
import {Tweet} from './tweet';

@Component({
    selector: 'my-app',
    template: `<div *ngFor="let tweet of tweets">
    <tweetcomponent [data]="tweet"></tweetcomponent>
    </div>`, 
    directives: [TweetComponent], 
    providers: [TweetService]
})
export class AppComponent {
 tweets: Tweet[];
    
    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }

 }