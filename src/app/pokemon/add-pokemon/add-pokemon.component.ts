import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-add-pokemon',
  standalone: true,
  imports: [PokemonFormComponent],
  template: `
    <h2 class="center">Ajouter un pokémon</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon;

  ngOnInit() {
    this.pokemon = new Pokemon();
  }

}
