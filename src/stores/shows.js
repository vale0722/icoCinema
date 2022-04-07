import { defineStore } from "pinia";
import { showsService } from "../services/showService";

export const useShowsStore = defineStore("shows", {
    state: () => ({
        show: {},
        shows: {},
        storeErrors: [],
    }),
    actions: {
        setShowActive(show) {
            this.show = show;
        },
        async refreshShows(force) {
            if (!this.shows.length || force) {
                this.shows = await showsService.all();
            }

            return this.shows;
        },
        async storeShow(attributes) {
            try {
                await showsService.create(attributes);
                this.storeErrors = [];
            } catch (error) {
                error.response.data.errors.errors.forEach((data) => {
                    this.storeErrors[data.param] = "El valor ingresado es invalido";
                });
            }
        },
        async updateShow(show, attributes) {
            try {
                await showsService.update(show.id, attributes);
                this.storeErrors = [];
            } catch (error) {
                error.response.data.errors.errors.forEach((data) => {
                    this.storeErrors[data.param] = "El valor ingresado es invalido";
                });
            }
        },
        async deleteShow(show) {
            try {
                await showsService.delete(show.id);
                this.storeErrors = [];
            } catch (error) {
                this.storeErrors = ["Ha ocurrido un error al eliminar el show"];
            }
        },
    },
});