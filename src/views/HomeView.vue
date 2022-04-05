<template>
  <main>
    <div class="hero min-h-screen principal relative scroll-smooth">
      <div class="hero-overlay bg-opacity-60 bg-img"></div>
      <div class="text-center hero-content text-neutral-content">
        <div
          class="max-w-md flex flex-col items-center hover:scale-125 duration-200"
        >
          <a href="/movies">
            <img
              data-aos="zoom-in"
              data-aos-easing="ease"
              data-aos-duration="500"
              alt="IcoCinema"
              src="@/assets/logo.svg"
              width="300"
              height="300"
            />
          </a>
        </div>
      </div>
      <svg
        class="absolute bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,32L30,53.3C60,75,120,117,180,128C240,139,300,117,360,106.7C420,96,480,96,540,128C600,160,660,224,720,261.3C780,299,840,309,900,293.3C960,277,1020,235,1080,208C1140,181,1200,171,1260,186.7C1320,203,1380,245,1410,266.7L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
    <div class="hero min-h-screen bg-black text-white">
      <div class="flex-col hero-content">
        <h1 class="text-5xl font-bold text-white">Cartelera</h1>
        <div
          class="w-full max-w-screen carouser-vertical md:carousel-horizontal carousel rounded-box gap-3 m-8"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="700"
        >
          <div class="carousel-item">
            <img
              src="https://api.lorem.space/image/movie?w=256&h=400&hash=8B7BCDC2"
              class="w-full md:max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://api.lorem.space/image/movie?w=256&h=400&hash=500B67FB"
              class="w-full md:max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://api.lorem.space/image/movie?w=256&h=400&hash=A89D0DE6"
              class="w-full md:max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://api.lorem.space/image/movie?w=256&h=400&hash=225E6693"
              class="w-full md:max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://api.lorem.space/image/movie?w=256&h=400&hash=9D9539E7"
              class="w-full md:max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://api.lorem.space/image/movie?w=256&h=400&hash=BDC01094"
              class="w-full md:max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://api.lorem.space/image/movie?w=256&h=400&hash=7F5AE56A"
              class="w-full md:max-w-sm rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="hero min-h-screen object-contain relative header-img">
      <div
        class="text-center hero-content text-neutral-content w-full h-full px-0"
      >
        <div class="flex flex-col w-full h-full py-8 justify-between">
          <div
            class="flex flex-col md:justify-start w-full items-start px-8"
            data-aos="fade-right"
            data-aos-easing="ease"
            data-aos-duration="500"
          >
            <h1 class="text-5xl font-bold">BATMAN</h1>
            <p class="py-6">
              Queremos brindarte una experiencia única a la hora de escoger tu
              película, ven y disfruta!
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration="500"
            class="flex md:justify-end w-full items-end px-8"
          >
            <button
              class="btn rounded-xl text-3xl md:rounded-r-none hover:scale-125 duration-200"
            >
              RESERVAR AHORA
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="hero min-h-screen bg-pop-100 text-white secondary relative">
      <div
        class="flex-col hero-content lg:flex-row-reverse justify-between w-full"
      >
        <img
          data-aos="fade-left"
          data-aos-easing="ease"
          data-aos-duration="500"
          src="https://api.lorem.space/image/movie?w=260&h=400"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div
          data-aos="fade-right"
          data-aos-easing="ease"
          data-aos-duration="500"
        >
          <h1 class="text-5xl font-bold">¿Cómo Comprar Online?</h1>
          <p class="py-6">
            Queremos brindarte una experiencia única a la hora de escoger tu
            película, ven y disfruta!
          </p>
          <label for="my-modal" class="btn hover:scale-125 duration-200"
            >Ver pasos</label
          >
        </div>
      </div>
    </div>
  </main>

  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box text-white bg-black p-16 mx-auto !max-w-2xl">
      <div class="flex justify-between gap-4">
        <h2 class="text-xl font-bold pb-8">¿Cómo Comprar Online?</h2>
        <label for="my-modal"
          ><font-awesome-icon class="text-3xl" icon="times"
        /></label>
      </div>
      <div class="grid md:grid-cols-5 gap-8">
        <div
          data-aos="zoom-in-down"
          class="flex flex-col justify-between items-center text-center gap-2 hover:scale-105 duration-200"
        >
          <div class="text-xl">1</div>
          <font-awesome-icon class="text-5xl" icon="desktop" />
          <p>Escoger<br />Película</p>
        </div>
        <div
          data-aos="zoom-in-down"
          class="flex flex-col justify-between items-center text-center gap-2 hover:scale-105 duration-200"
        >
          <div class="text-xl">2</div>
          <font-awesome-icon class="text-5xl" icon="calendar" />
          <p>Elegir día<br />Y hora</p>
        </div>
        <div
          data-aos="zoom-in-down"
          class="flex flex-col justify-between items-center text-center gap-2 hover:scale-105 duration-200"
        >
          <div class="text-xl">3</div>
          <font-awesome-icon class="text-5xl" icon="check" />
          <p>Registrarse</p>
        </div>
        <div
          data-aos="zoom-in-down"
          class="flex flex-col justify-between items-center text-center gap-2 hover:scale-105 duration-200"
        >
          <div class="text-xl">4</div>
          <font-awesome-icon class="text-5xl" icon="chair" />
          <p>Escoger<br />Silla</p>
        </div>
        <div
          data-aos="zoom-in-down"
          class="flex flex-col justify-between items-center text-center gap-2 hover:scale-105 duration-200"
        >
          <div class="text-xl">5</div>
          <font-awesome-icon class="text-5xl" icon="qrcode" />
          <p>Mostrar Qr</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHeaderStore } from "../stores/header";
import { useUserStore } from "../stores/user.js";

const user = useUserStore();
user.setIsCustomer();

const color = useHeaderStore();
color.setLight();
</script>

<style scoped lang="css">
.principal {
  background-image: url("@/assets/images/cinemawelcome.jpg");
}
.header-img {
  background-image: url("@/assets/images/batman.png");
}
.bg-img {
  background-color: #820900bf;
}
</style>
