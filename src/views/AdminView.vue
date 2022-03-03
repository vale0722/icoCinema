<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <div class="my-2 overflow-x-auto sm:mx-2 lg:mx-8 min-h-screen">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden border-b border-gray-200 sm:rounded-lg mt-32 mx-16">
          <ul class="flex flex-row m-5 text-2xl justify-between">
            <li>
                <h1>Administración de peliculas</h1>
            </li>
            <li>
               <label for="addMovie-modal" class="btn modal-button">Añadir pelicula</label>
                <!-- <RouterLink to="/AddMovie">Añadir pelicula</RouterLink>
                todo: define if addmovie will be a modal or other route -->
            </li>
          </ul>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pelicula</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sinopsis</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edad Mínima</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duración</th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                   <!-- todo: define if edit movie will be a modal or other route-->
                   
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="movie in billboard" :key="movie.nombrePelicula">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" :src="movie.image" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ movie.nombrePelicula }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ movie.sinopsis}}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ movie.edadMinima}}</div>               
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ movie.duracion }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <label for="editMovie-modal" class="text-indigo-600 hover:text-indigo-900">Editar</label>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-400 hover:text-indigo-900">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <input type="checkbox" id="addMovie-modal" class="modal-toggle">
  <div class="modal">
     

     <!-- Hacer formulario para añadir nueva pelicula -->

        <div class="relative min-h-screen flex flex-col sm:justify-center items-center ">
        <div class="relative sm:max-w-sm w-full">
            <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <label for="" class="block mt-3 text-lg text-gray-700 text-center font-semibold">
                    Ingrese los datos de la pelicula
                </label>
                <form method="#" action="#" class="mt-10">
                                    
                    <div>
                        <input type="text" placeholder="Nombre" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                    </div>
        
                    <div class="mt-7">                
                        <input type="text" placeholder="Sinopsis" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">                           
                    </div>

                    <div class="mt-7">   
                        <input type="number" placeholder="Duracion" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">                           
                    </div>

                    <div class="mt-7">                
                        <input type="number" placeholder="Edad minima" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">                           
                    </div>

                    <div class="mt-7">
                        <button class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Crear
                        </button>

                        <button class="mt-3 bg-blue-400 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Salir
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>




     <!-- ACA FINALIZA -->

     

  <input type="checkbox" id="editMovie-modal" class="modal-toggle">
  <div class="modal">
   
     <!-- Hacer formulario para añadir nueva pelicula -->
<div class="modal-box font-sans ">
        <div class="relative min-h-screen flex flex-col sm:justify-center items-center  ">
        <div class="relative sm:max-w-sm w-full">
            <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <label for="" class="block mt-3 text-lg text-gray-700 text-center font-semibold">
                    Edite los datos que desea cambiar
                </label>
                <form method="#" action="#" class="mt-10">
                                    
                    <div>
                        <input type="text" placeholder="Nombre" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                    </div>
        
                    <div class="mt-7">                
                        <input type="text" placeholder="Sinopsis" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">                           
                    </div>

                    <div class="mt-7">   
                        <input type="number" placeholder="Duracion" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">                           
                    </div>

                    <div class="mt-7">                
                        <input type="number" placeholder="Edad minima" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">                           
                    </div>

                    <div class="mt-7">
                        <button class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Editar
                        </button>

                        <button class="mt-3 bg-blue-400 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Salir
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

     <!-- ACA FINALIZA -->

   </div>
 

</template>

<script>
const billboard = [
  {
    nombrePelicula: 'Batman - El caballero de la noche',
    sinopsis: 'De huerfano de la noche al heroe de la noche',
    edadMinima: '+14',
    duracion: '120',
    image:'../assets/images/batman.png',
  },
  {
    nombrePelicula: 'Free Guy',
    sinopsis: 'Revolucionando la vida de un banquero',
    edadMinima: '+16',
    duracion: '110',
    image:'../assets/images/freeGuy.png',
  },
  
]

export default {
  setup() {
    return {
      billboard,
    }
  },
}
</script>
