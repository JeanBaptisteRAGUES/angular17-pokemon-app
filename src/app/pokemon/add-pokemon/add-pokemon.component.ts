import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonFormComponent],
  template: `
    <div class=' w-full min-h-[95%] flex flex-col items-center justify-start bg-slate-700'>
      <h2 class=" text-2xl md:text-5xl text-white">Ajouter un pokémon</h2>
      <p *ngIf="pokemon" class="center">
        <img [src]="pokemon.picture">
      </p>
      <app-pokemon-form [pokemon]="pokemon" class="w-full h-full "></app-pokemon-form>
    </div>
  `
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon;

  ngOnInit() {
    this.pokemon = new Pokemon();
  }

}
