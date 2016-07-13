import {Component, Input} from '@angular/core';

@Component ({
    selector: 'likes',
    template : ` 
    <h2><i class="glyphicon glyphicon-heart"
    [class.highlighted]="isLike"    
    (click)="onToggleLike()"
     ></i>
    
    {{likeCount}}
    </h2>
    `,
    styles: [`
    
     .glyphicon-heart {
            color: #ccc; 
            cursor: pointer;
        }
    .highlighted {
            color: pink; 
        }   
           

    `]
        
    

})
export class LikesComponent  {
    @Input() likeCount: number = 0;
    @Input() isLike:boolean = false; 
    
    onToggleLike() {
        console.log("like", this.isLike);
        this.isLike = !this.isLike; 
        if (this.isLike){
            this.likeCount ++;              
        } else{
            this.likeCount --; 
        }
    }

}