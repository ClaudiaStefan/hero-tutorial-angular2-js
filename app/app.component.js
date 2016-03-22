(function(app) {
        var HEROES = [
            new Hero(11, 'Mr. Nice'),
            new Hero(12, 'Narco'),
            new Hero(13, 'Bombasto'),
            new Hero(14, 'Celeritas'),
            new Hero(15, 'Magneta'),
            new Hero(16, 'RubberMan'),
            new Hero(17, 'Dynama'),
            new Hero(18, 'Dr IQ'),
            new Hero(19, 'Magma'),
            new Hero(20, 'Tornado'),
        ];

        app.AppComponent = ng.core
            .Component({
                selector: 'my-app',
                template: `
                    <h1>{{title}}</h1>
                    <h2> My Heroes </h2>
                    <ul class="heroes">
                        <li *ngFor ="#hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
                            <span class="badge">{{hero.id}} </span>{{hero.name}}
                        </li>
                    </ul>
                    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
                    `,
                directives: [app.HeroDetailComponent]
            })
            .Class({
                constructor: function () {
                    this.title = 'Tour of Heroes';
                    this.selectedHero = null;
                    this.heroes = HEROES;
                },
                onSelect (hero) {
                    this.selectedHero = hero;
                }
            });

})(window.app || (window.app = {}));