(function(app) {
    app.HeroDetailComponent = ng.core
        .Component({
            selector: 'my-hero-detail',
            inputs: ['hero'],
            template: `
            <div *ngIf="hero">
                <h2>{{hero.name}} details!</h2>
                <div><label> id: </label> {{hero.id}}</div>
                <div><input type="text" [(ngModel)]="hero.name" placeholder="name"></div>
            </div>
            `
        })
        .Class({
            constructor: function () {
            }
        });
})(window.app || (window.app = {}));