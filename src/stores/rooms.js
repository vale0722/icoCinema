import { defineStore } from "pinia";
import { roomsService } from "../services/roomService";

export const useRoomsStore = defineStore("rooms", {
  state: () => ({
    room: {},
    rooms: {},
    storeErrors: [],
  }),
  actions: {
    setRoomActive(room) {
      this.room = room;
    },
    async refreshRooms(force) {
      if (!this.rooms.length || force) {
        this.rooms = await roomsService.all();
      }

      return this.rooms;
    },
    async storeRoom(attributes) {
      try {
        await roomsService.create(attributes);
        this.storeErrors = [];
      } catch (error) {
        error.response.data.errors.errors.forEach((data) => {
          this.storeErrors[data.param] = "El valor ingresado es invalido";
        });
      }
    },
    async updateRoom(room, attributes) {
      try {
        await roomsService.update(room.id, attributes);
        this.storeErrors = [];
      } catch (error) {
        error.response.data.errors.errors.forEach((data) => {
          this.storeErrors[data.param] = "El valor ingresado es invalido";
        });
      }
    },
    async deleteRoom(room) {
      try {
        await roomsService.delete(room.id);
        this.storeErrors = [];
      } catch (error) {
        this.storeErrors = ["Ha ocurrido un error al eliminar la sala"];
      }
    },
  },
});
