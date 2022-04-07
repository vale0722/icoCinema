import { defineStore } from "pinia";
import { bookingsService } from "../services/boookingService";

export const useBookingStore = defineStore("bookings", {
    state: () => ({
        booking: {},
        bookings: {},
        storeErrors: [],
    }),
    actions: {
        setBookingActive(booking) {
            this.booking = booking;
        },
        async refreshBookings(force) {
            if (!this.bookings.length || force) {
                this.bookings = await bookingsService.all();
            }

            return this.bookings;
        },
        async storeBooking(attributes) {
            try {
                await bookingsService.create(attributes);
                this.storeErrors = [];
            } catch (error) {
                error.response.data.errors.errors.forEach((data) => {
                    this.storeErrors[data.param] = "El valor ingresado es invalido";
                });
            }
        },
        async updateBooking(booking, attributes) {
            try {
                await bookingsService.update(booking.id, attributes);
                this.storeErrors = [];
            } catch (error) {
                error.response.data.errors.errors.forEach((data) => {
                    this.storeErrors[data.param] = "El valor ingresado es invalido";
                });
            }
        },
        async deleteBooking(booking) {
            try {
                await bookingsService.delete(booking.id);
                this.storeErrors = [];
            } catch (error) {
                this.storeErrors = ["Ha ocurrido un error al eliminar el booking"];
            }
        },
    },
});