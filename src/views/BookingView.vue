<template>
  <div class="flex flex-col">
    <div class="my-2 overflow-x-auto lg:mx-2 max-w-screen">
      <div class="overflow-x-auto w-full text-gray-900">
        <table class="table w-full">
          <thead>
            <tr>
              <th class="bg-gray-200">Nombre de la pelicula</th>
              <th class="bg-gray-200">Numero de reservas</th>
              <th class="bg-gray-200">Valor</th>
              <th class="bg-gray-200">Sala</th>
              <th class="bg-gray-200">Fecha de la función</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="booking in bookings" :key="booking.id">
              <td>
                <div class="font-bold">{{ booking.movie }}</div>
              </td>
              <td>
                <div class="font-bold">{{ booking.quantity }}</div>
              </td>
              <td>
                <div class="font-bold">{{ booking.value }}</div>
              </td>
              <td>
                <div class="font-bold">{{ booking.room }}</div>
              </td>
              <td>
                <div class="font-bold">{{ booking.show_day }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useBookingStore } from "../stores/booking";
import { storeToRefs } from "pinia/dist/pinia";

const useBooking = useBookingStore();
const { refreshBookings } = useBooking;
const { bookings } = storeToRefs(useBooking);

const refresh = async (force) => {
  bookings.value = await refreshBookings(force);
};

onMounted(async () => {
  await refresh();
});
</script>