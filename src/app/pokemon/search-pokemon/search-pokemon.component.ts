import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [AutoCompleteModule, CardModule, CommonModule, FormsModule],
  providers: [PokemonService],
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {
  // Subject -> classe rxjs -> stock les recherches de l'utilisateur dans un tableau de caractères
  // Subject se comporte comme un observable mais qu'on peut piloter -> construire un flux de données
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // Res = {...."ab"..."abz"."ab"...."abc"......}
      debounceTime(300), // Enlève les séquences de caractères rapprochées (l'utilisateur n'avait pas fini d'écrire)
      // {......"ab"...."ab"...."abc"......}
      distinctUntilChanged(), // On enlève les séquences de caractères similaires
      // {......"ab"..........."abc"......}
      switchMap((term) => this.pokemonService.searchPokemonList(term)) // Permet de retenir seulement la recherche la plus récente
      // {.....pokemonList(ab)............pokemonList(abc)......} // Ne renvoie pas un flux, contrairement à map()
    );
  }

  search(term: string) {
    // next agit comme push pour un tableau mais avec un flux de données
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}

