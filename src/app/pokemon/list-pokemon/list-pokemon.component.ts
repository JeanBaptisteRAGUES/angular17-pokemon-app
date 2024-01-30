import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Pokemon } from '../pokemon';
import { CommonModule, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { PokemonService } from '../pokemon.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';
import { CardModule } from 'primeng/card';

/* HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}), */

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CardModule, CommonModule, FormsModule, NgStyle, PokemonTypeColorPipe, RouterModule, SearchPokemonComponent],
  providers: [PokemonService],
  templateUrl: './list-pokemon.component.html',
  styles: ``
})
export class ListPokemonComponent {
  pokemonList: Pokemon[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService,
  ) {}

  ngOnInit() {
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
