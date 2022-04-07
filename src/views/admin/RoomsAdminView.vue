<template>
  <div class="flex flex-col">
    <ul class="flex flex-row m-5 lg:text-2xl justify-end">
      <label for="addRoom-modal" class="btn modal-button"
        >Añadir sala</label
      >
    </ul>
    <div class="my-2 overflow-x-auto lg:mx-2 max-w-screen">
      <div class="overflow-x-auto w-full text-gray-900">
        <table class="table w-full">
          <thead>
            <tr>
              <th class="bg-gray-200">Sala</th>
              <th class="bg-gray-200 text-center">Aforo</th>
              <th class="bg-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="room in roomRef" :key="room.id">
              <td>
                <div class="font-bold">{{ room.id }}</div>
              </td>
              <td class="text-center">
                {{ room.capacity }}
              </td>
              <td>
                <div class="flex gap-3">
                  <label
                    class="text-gray-600 hover:text-gray-900 cursor-pointer"
                  >
                    <font-awesome-icon icon="eye" />
                  </label>
                  <label
                    for="editRoom-modal"
                    @click="setRoom(room)"
                    class="text-gray-600 hover:text-gray-900 cursor-pointer"
                  >
                    <font-awesome-icon icon="pen" />
                  </label>
                  <label
                    for="confirmDelete-modal"
                    @click="setRoom(room)"
                    class="text-gray-600 hover:text-gray-900 cursor-pointer"
                  >
                    <font-awesome-icon icon="trash" />
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="addRoom-modal" class="modal-toggle" />
  <label class="modal">
    <AddRoomModal @created="refresh(true)" />
  </label>

  <input type="checkbox" id="editRoom-modal" class="modal-toggle" />
  <label for="editRoom-modal" class="modal cursor-pointer">
    <EditRoomModal @updated="refresh(true)" />
  </label>

  <input type="checkbox" id="confirmDelete-modal" class="modal-toggle" />
  <label for="confirmDelete-modal" class="modal cursor-pointer">
    <ConfirmDeleteModal @deleted="refresh(true)" />
  </label>
</template>

<script setup>
import AddRoomModal from "../../components/AddRoomModal.vue";
import EditRoomModal from "../../components/EditRoomModal.vue";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal.vue";
import { onMounted, ref } from "vue";
import { useRoomStore } from "../../stores/rooms";
const { rooms, refreshRooms, setRoomActive } = useRoomsStore();
let roomsRef = ref(rooms);

const refresh = async (force) => {
  roomsRef.value = await refreshRooms(force);
};

const setRoom = async (room) => await setRoomActive(room);

onMounted(async () => {
   await refresh();
});
</script>