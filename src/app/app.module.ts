import {WeatherComponent} from './weather/weather.component';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './routes';
...
@NgModule({
    declarations:[
      ...
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(allAppRoutes)
    ]
    ...
})
