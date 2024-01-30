import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from '../../loader/loader.component';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [CommonModule, FormsModule, LoaderComponent, PokemonTypeColorPipe],
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css'],
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];
  isAddForm: boolean;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked) {
      this.pokemon.types.push(type);
    } else {
      //Retire le type du pokemon
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);

      //TODO: Essayer simplement this.pokemon.types = this.pokemon.types.filter(pType => pType !== type);
    }
  }

  isTypesValid(type: string): boolean {
    if(this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }

    if(this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit() {
    // subscribe((pokemon: Pokemon)) -> on récupère le pokemon créé avec addPokemon et son id généré automatiquement par le serveur
    if(this.isAddForm) {
      this.pokemonService.addPokemon(this.pokemon)
        .subscribe((pokemon: Pokemon) => this.router.navigate(['/pokemon', pokemon.id]));
    } else {
      this.pokemonService.updatePokemon(this.pokemon)
        .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
    }
  }

}

