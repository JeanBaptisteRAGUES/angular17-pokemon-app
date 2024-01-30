/* Chapitre 5 : Les Pipes */
import { Pipe, PipeTransform } from '@angular/core';
  
/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
@Pipe({name: 'pokemonTypeColor', standalone: true})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): any {
  
    let color: string;
  
    /* switch (type) {
      case 'Feu':
        color = 'red lighten-1';
        break;
      case 'Eau':
        color = 'blue lighten-1';
        break;
      case 'Plante':
        color = 'green lighten-1';
        break;
      case 'Insecte':
        color = 'brown lighten-1';
        break;
      case 'Normal':
        color = 'grey lighten-3';
        break;
      case 'Vol':
        color = 'blue lighten-3';
        break;
      case 'Poison':
        color = 'deep-purple accent-1';
        break;
      case 'Fée':
        color = 'pink lighten-4';
        break;
      case 'Psy':
        color = 'deep-purple darken-2';
        break;
      case 'Electrik':
        color = 'lime accent-1';
        break;
      case 'Combat':
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    } */
  
    switch (type) {
      case 'Feu':
        color = 'red';
        break;
      case 'Eau':
        color = 'aqua';
        break;
      case 'Plante':
        color = 'green';
        break;
      case 'Insecte':
        color = 'darkkhaki';
        break;
      case 'Normal':
        color = 'lightgray';
        break;
      case 'Vol':
        color = 'skyblue';
        break;
      case 'Poison':
        color = 'darkmagenta';
        break;
      case 'Fée':
        color = 'pink';
        break;
      case 'Psy':
        color = 'darkviolet';
        break;
      case 'Electrik':
        color = 'gold';
        break;
      case 'Combat':
        color = 'brown';
        break;
      default:
        color = 'gray';
        break;
    }

    // chip est une classe de Materialize qui permet d'afficher un rond de couleur
    //return 'chip ' + color;
    //console.log(` bg-${color} rounded-lg m-2 p-1`);
    return {background: color};
  
  }
}
