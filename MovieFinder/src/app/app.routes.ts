import { Routes } from '@angular/router';
import { SearchTitleComponent } from './components/search-title/search-title.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path: '', component:SearchTitleComponent},
    {path: 'search', component:SearchComponent},
    {path: 'about', component:AboutComponent},
];
