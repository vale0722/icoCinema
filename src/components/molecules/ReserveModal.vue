<template>
  <div>
    <div class="modal-box relative bg-white w-screen h-96 text-gray-900 justify-between flex flex-col">
      <label
          for="reserve-modal"
          class="btn btn-sm btn-circle absolute right-2 top-2 z-50"
      >✕</label
      >

      <div class="w-full text-center">
        <p class="font-bold text-xl"> {{ movie.name }} </p>
      </div>
      <div class="flex justify-between gap-6">
        <div class="space-y-4 w-2/3">
          <div>
            <p class="font-medium text-sm text-gray-400"> Reserva</p>
          </div>
          <div>
            <p class="font-medium text-sm text-gray-400"> Valor unitario </p>
            <p> $10.000 </p>
          </div>
          <div v-if="show.room">
            <p class="font-medium text-sm text-gray-400"> Lugar </p>
            <p> Sala {{ show.room }} </p>
          </div>
        </div>
        <div class="space-y-2 w-full">
          <div>
            <div class="w-full self-center h-full">
              <label class="font-medium text-sm text-gray-400">Funciones</label>
              <select
                  v-model="show"
                  class="mt-1 block w-full border-none bg-gray-100 text-gray-800 h-11 rounded-xl shadow-lg focus:ring-0 px-2"
              >
                <option selected>Seleccione una opción</option>
                <template v-for="shows in movie.shows" :key="shows.id">
                  <option :value="shows">{{ shows.show_day + ' ' + shows.show_hour }}</option>
                </template>
              </select>
            </div>
          </div>

          <div class="mt-3">
            <label class="font-medium text-sm text-gray-400">Asientos</label>
            <div class="flex items-center self-center">
              <button :disabled="quantity <= 0" @click="dismissCount"
                      class="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>
              <span class="text-gray-700 mx-2">{{ quantity }}</span>
              <button :disabled="quantity >= show.quantity" @click="sumCount"
                      class="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between self-center w-full">
        <div class="self-center border-gray-200">
          <div class="flex justify-between gap-3">
            <div>
              <p class="font-bold text-black text-lg"> Total </p>
            </div>
            <p class="font-bold text-black text-lg"> $ {{ (quantity ?? 0) * 10000 }} </p>
          </div>
        </div>
        <label
          for="reserve-modal"
          @click="create"
            class="self-center btn bg-red-800 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
          Reservar
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { defineProps, ref } from "vue";
import { useBookingStore } from "../../stores/booking";
import { useUserStore } from "../../stores/user";
import { storeToRefs } from "pinia/dist/pinia";

export default {
  props: {
    movie: {},
  },
  setup(props, computed) {
    const { storeBooking } = useBookingStore();
    const storeUser = useUserStore();
    const { auth } = storeToRefs(storeUser);
    const show = ref({});
    const quantity = ref(0);

    const create = async () => {
      const form = new FormData();
      form.append("show_id", show.value.id);
      form.append("user_id", auth && auth.user ? auth.user.id : 1);
      form.append("quantity", quantity.value);
      form.append("value", (quantity.value ?? 0) * 10000);
      await storeBooking(form);
      computed.emit("created");
    };

    const sumCount = () => {
      if (quantity.value < show.value.quantity) {
        quantity.value = quantity.value + 1;
      }
    };

    const dismissCount = () => {
      if (quantity.value > 0) {
        quantity.value = quantity.value - 1;
      }
    };

    return { dismissCount, sumCount, quantity, show, create };
  },
};


defineProps({
  movie: {},
});
</script>
