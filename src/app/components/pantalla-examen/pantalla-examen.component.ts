import { Component, OnInit } from '@angular/core';
import { IDataPokemon, PokemonInterfaces } from 'src/app/interfaces/pokemon-interfaces'; 
import { PokemonService } from 'src/app/services/pokemon.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-pantalla-examen',
  templateUrl: './pantalla-examen.component.html',
  styleUrls: ['./pantalla-examen.component.css'],
  providers: [MessageService]
})
export class PantallaExamenComponent  implements OnInit{
  listPokemon: IDataPokemon[] =[];
  constructor (private pokemonservice: PokemonService, private mensajes: MessageService) {}


  ngOnInit(): void {
    console.log('hola estoy aqui desde oninit');
    this.pokemonservice.getAllPokemon().subscribe(
      {
          next: (datos)=>{
          console.log(datos);
          this.listPokemon=datos.results;
          this.mensajes.add({ severity: 'success', summary: 'Success', detail: 'Message Content'});
          
        },
          error:(err)=>{
            console.log(err);

        }
      }
    )
  }



}
