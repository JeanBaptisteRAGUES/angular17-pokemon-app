import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, filter, from, map, of, switchMap, tap } from 'rxjs';
import { POKEMONS } from './mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // URL = 'api/pokemons';
  URL = 'http://localhost:3000/pokemons';

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    // tap -> console.log() pour les Observable
    return this.http.get<Pokemon[]>(this.URL).pipe(
      tap((pokemonListResponse) => this.log(pokemonListResponse)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: string): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`${this.URL}/${pokemonId}`).pipe(
      tap((pokemonResponse) => this.log(pokemonResponse)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  searchPokemonList(term: string): Observable<Pokemon[]> {
    if(term.length <= 1) {
      return of([]);
    } 

    let pokemons: Pokemon[] = []; 
    /* this.http.get<Pokemon[]>(this.URL)
    .pipe(filter(pokemon => pokemon.name.includes(term))
    ); */
    /* this.http.get<Pokemon[]>(this.URL).pipe(
      tap((response) => this.log(response))
    ); */
    return this.getPokemonList().pipe(
      map((pokemonsList) => pokemonsList.filter(pokemon => pokemon.name.includes(term))),
      tap(response => this.log(response))
    )
    /* let wookiesTresGrands: any = [];
    const wookies$ = from([ {surname: 'Chewie', size: 250}, {surname: 'Aktar', size: 350}, {surname: 'Chewa', size: 290} ]);
    wookies$.pipe(
      filter(item => item.size > 270),
      tap((response) => this.log(response))
    ).subscribe(item =>
    wookiesTresGrands.push(item));
    console.log(wookiesTresGrands); */
    

    /* this.pokemonService.getPokemonById(pokemonId)
        .subscribe(pokemon => this.pokemon = pokemon); */

    /* pokemons.subscribe(pokemonList => console.log(pokemonList));
    let test = pokemons.subscribe(pokemonList => pokemons = of(pokemonList.filter(pokemon => pokemon.name.includes(term))));
    pokemons.subscribe(pokemonList => console.log(pokemonList));
    pokemons.subscribe(pokemonList => console.log(pokemonList)); */

    /* return this.http.get<Pokemon[]>(`${this.URL}/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    ); */
  }

  // L'API d'Angular renvoie toujours null (au lieu de l'objet modifié), même si la modification a bien fonctionné
  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    // put -> requête de modification (update)
    return this.http.put(`${this.URL}/${pokemon.id}`, pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    // post<Pokemon> va permettre au serveur de créer un id pour le pokemon et on va le récupérer
    return this.http.post<Pokemon>(this.URL, pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deletePokemonById(pokemonId: string): Observable<null> {
    return this.http.delete(`${this.URL}/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);

    // 'of' permet de transformer une donnée simple en un flux de données qui retourne la valeur -> fluidité
    return of(errorValue);
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte',
      'Normal',
      'Electrik', 
      'Poison', 
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}

