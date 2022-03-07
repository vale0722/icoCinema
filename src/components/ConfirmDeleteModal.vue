<template>
    <div class="font-sans">
      <div
        class="
          relative
          min-h-screen
          flex flex-col
          sm:justify-center
          items-center
        "
      >
        <div class="relative sm:max-w-sm w-full">
          <div
            class="
              card
              bg-blue-400
              shadow-lg
              w-full
              h-full
              rounded-3xl
              absolute
              transform
              -rotate-6
            "
          ></div>
          <div
            class="
              card
              bg-red-400
              shadow-lg
              w-full
              h-full
              rounded-3xl
              absolute
              transform
              rotate-6
            "
          ></div>
          <div
            class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md"
          >
            <h2
              for="confirmDelete-modal"
              class="block mt-3 text-lg text-gray-700 text-center font-semibold"
            >
              Está seguro que desea borrar?
            </h2>
            <div class="mt-7">
              <button
                class="
                  bg-blue-500
                  w-full
                  py-3
                  rounded-xl
                  text-white
                  shadow-xl
                  hover:shadow-inner
                  focus:outline-none
                  transition
                  duration-500
                  ease-in-out
                  transform
                  hover:-translate-x hover:scale-105
                "
              >
                Sí, Borrar
              </button>
            </div>
            <div class="modal-action">
              <label
                for="confirmDelete-modal"
                class="
                  btn
                  bg-blue-500
                  w-full
                  py-3
                  rounded-xl
                  text-white
                  shadow-xl
                  hover:shadow-inner
                  focus:outline-none
                  transition
                  duration-500
                  ease-in-out
                  transform
                  hover:-translate-x hover:scale-105
                "
              >
                Regresar
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>