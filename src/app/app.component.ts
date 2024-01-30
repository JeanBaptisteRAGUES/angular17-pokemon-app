import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav class=" h-[5%] w-full sticky top-0 bg-teal-600">
      <div class="w-full h-full flex justify-center items-center" >
        <a href="#" class=" text-white no-underline font-bold">
          Pokédex
        </a>
      </div>
    </nav>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng17-pokemon-app';
}

/* <div class="flex justify-center items-center bg-slate-500 h-[95%]" >
      <div class="flex justify-center items-center h-full w-full bg-green-400" >
        <div class=" flex justify-center items-center bg-red-600 h-52 w-32">
          Test
        </div>
      </div>
    </div> */

/* <div class="flex flex-col w-screen h-screen" >
      <nav class=" min-h-[10%] bg-cyan-300">
        <div>
          <a href="#" class="brand-logo center">
            Pokédex
          </a>
        </div>
      </nav>
      <router-outlet class=" h-fit" />
    </div> */
