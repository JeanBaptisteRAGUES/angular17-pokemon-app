import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { ListPostComponent } from './post/list-post/list-post.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { AddPokemonComponent } from './pokemon/add-pokemon/add-pokemon.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';
import { AuthGuard } from './auth.guard';


// TODO: Mettre les authGuards
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'edit/pokemon/:id', component: EditPokemonComponent, canActivate: [AuthGuard] },
    { path: 'pokemon/add', component: AddPokemonComponent, canActivate: [AuthGuard] },
    { path: 'pokemons', component: ListPokemonComponent, canActivate: [AuthGuard] },
	{ path: 'pokemon/:id', component: DetailPokemonComponent, canActivate: [AuthGuard] },
    { path: 'post', component: ListPostComponent },
    { path: '**', component: PageNotFoundComponent }
];