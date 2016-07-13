System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LikesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LikesComponent = (function () {
                function LikesComponent() {
                    this.likeCount = 0;
                    this.isLike = false;
                }
                LikesComponent.prototype.onToggleLike = function () {
                    console.log("like", this.isLike);
                    this.isLike = !this.isLike;
                    if (this.isLike) {
                        this.likeCount++;
                    }
                    else {
                        this.likeCount--;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], LikesComponent.prototype, "likeCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], LikesComponent.prototype, "isLike", void 0);
                LikesComponent = __decorate([
                    core_1.Component({
                        selector: 'likes',
                        template: " \n    <h2><i class=\"glyphicon glyphicon-heart\"\n    [class.highlighted]=\"isLike\"    \n    (click)=\"onToggleLike()\"\n     ></i>\n    \n    {{likeCount}}\n    </h2>\n    ",
                        styles: ["\n    \n     .glyphicon-heart {\n            color: #ccc; \n            cursor: pointer;\n        }\n    .highlighted {\n            color: pink; \n        }   \n           \n\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LikesComponent);
                return LikesComponent;
            }());
            exports_1("LikesComponent", LikesComponent);
        }
    }
});
//# sourceMappingURL=likes.component.js.map