import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { PokemonInterfaces } from '../interfaces/pokemon-interfaces';

const API_GET_ALL_POKEMON =environment.API_GET_ALL_POKEMON;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }
  getAllPokemon(){
    return this.http.get<PokemonInterfaces>(API_GET_ALL_POKEMON);
  }
}


