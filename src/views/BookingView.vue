<template>
  <div class="flex flex-col">
    <div class="my-2 overflow-x-auto lg:mx-2 max-w-screen">
      <div class="overflow-x-auto w-full text-gray-900">
        <table class="table w-full">
          <thead>
            <tr>
              <th class="bg-gray-200">Nombre de la pelicula</th>
              <th class="bg-gray-200">Fecha de la función</th>
              <th class="bg-gray-200">Numero de reservas</th>
              <th class="bg-gray-200">Sala</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="booking in bookingRef" :key="booking.id">
              <td>
                <div class="font-bold">Soy la peliucla</div>
              </td>
              <td>
                <div class="font-bold">Soy la funcion</div>
              </td>
              <td>
                <div class="font-bold">Soy la reserva</div>
              </td>
              <td>
                <div class="font-bold">Sala</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script setup>
import { onMounted, ref } from "vue";
import { useBookingStore} from "../stores/booking";

const { bookings, refreshBookings} = useBookingStore();
let bookingsRef = ref(bookings);

const refresh = async (force) => {
  bookingsRef.value = await refreshBookings(force);
};

onMounted(async () => {
  await refresh();
});

</script>