import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  createDb() {
    // C'est très important de d'abord déclarer une variable avant de la retourner !
    // return { POKEMONS } -> ne marche pas !!!
    const pokemons = POKEMONS;
    return { pokemons };
  }
}
