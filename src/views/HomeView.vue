<template>
  <main>
    <div class="hero min-h-screen principal relative">
      <div class="hero-overlay bg-opacity-60 bg-img"></div>
      <div class="text-center hero-content text-neutral-content">
        <div class="max-w-md flex flex-col items-center hover:scale-125 duration-200">
          <a href="/cinema">
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
      <svg class="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,32L30,53.3C60,75,120,117,180,128C240,139,300,117,360,106.7C420,96,480,96,540,128C600,160,660,224,720,261.3C780,299,840,309,900,293.3C960,277,1020,235,1080,208C1140,181,1200,171,1260,186.7C1320,203,1380,245,1410,266.7L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
    </div>
    <div class="hero min-h-screen bg-black text-white">
      <div class="flex-col hero-content">
      <h1 class="text-5xl font-bold text-white">Cartelera</h1>
      <div class="w-full max-w-screen carouser-vertical md:carousel-horizontal carousel rounded-box gap-3 m-8" data-aos="fade-up"
           data-aos-easing="ease"
           data-aos-duration="700">
        <div class="carousel-item" >
          <img src="https://api.lorem.space/image/movie?w=256&h=400&hash=8B7BCDC2" class="w-full md:max-w-sm rounded-lg shadow-2xl">
        </div>
        <div class="carousel-item">
          <img src="https://api.lorem.space/image/movie?w=256&h=400&hash=500B67FB" class="w-full md:max-w-sm rounded-lg shadow-2xl">
        </div>
        <div class="carousel-item">
          <img src="https://api.lorem.space/image/movie?w=256&h=400&hash=A89D0DE6" class="w-full md:max-w-sm rounded-lg shadow-2xl">
        </div>
        <div class="carousel-item">
          <img src="https://api.lorem.space/image/movie?w=256&h=400&hash=225E6693" class="w-full md:max-w-sm rounded-lg shadow-2xl">
        </div>
        <div class="carousel-item">
          <img src="https://api.lorem.space/image/movie?w=256&h=400&hash=9D9539E7" class="w-full md:max-w-sm rounded-lg shadow-2xl">
        </div>
        <div class="carousel-item">
          <img src="https://api.lorem.space/image/movie?w=256&h=400&hash=BDC01094" class="w-full md:max-w-sm rounded-lg shadow-2xl">
        </div>
        <div class="carousel-item">
          <img src="https://api.lorem.space/image/movie?w=256&h=400&hash=7F5AE56A" class="w-full md:max-w-sm rounded-lg shadow-2xl">
        </div>
      </div>
        </div>
    </div>
    <div class="hero min-h-screen object-contain relative header-img">
      <div class="text-center hero-content text-neutral-content w-full h-full px-0">
        <div class="flex flex-col w-full h-full py-8 justify-between">
          <div
            class="flex flex-col md:justify-start w-full items-start px-8"
            data-aos="fade-right"
            data-aos-easing="ease"
            data-aos-duration="500">
            <h1 class="text-5xl font-bold">BATMAN</h1>
            <p class="py-6">Queremos brindarte una experiencia única a la hora de escoger tu película, ven y disfruta!</p>
          </div>
          <div  data-aos="fade-left"
                data-aos-easing="ease"
                data-aos-duration="500" class="flex md:justify-end w-full items-end px-8">
            <button class="btn rounded-xl text-3xl md:rounded-r-none hover:scale-125 duration-200">RESERVAR AHORA</button>
          </div>
        </div>
      </div>
    </div>
    <div class="hero min-h-screen bg-pop-100 text-white secondary relative">
      <div class="flex-col hero-content lg:flex-row-reverse justify-between w-full">
        <img data-aos="fade-left"
             data-aos-easing="ease"
             data-aos-duration="500"  src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl">
        <div
             data-aos="fade-right"
             data-aos-easing="ease"
             data-aos-duration="500">
          <h1 class="text-5xl font-bold">¿Cómo Comprar Online?</h1>
          <p class="py-6">Queremos brindarte una experiencia única a la hora de escoger tu película, ven y disfruta!</p>
          <label for="my-modal" class="btn hover:scale-125 duration-200">Ver pasos</label>
        </div>
      </div>
    </div>
    <footer class="p-10 footer bg-black text-white text-base-content footer-center rounded">
      <div class="grid grid-flow-col gap-4">
        <a class="link link-hover">Sobre Nosotros</a>
        <a class="link link-hover">Contactenos</a>
        <a class="link link-hover">Trabajos</a>
      </div>
      <div>
        <div class="grid grid-flow-col gap-4">
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - Iconianos</p>
      </div>
    </footer>
  </main>

  <input type="checkbox" id="my-modal" class="modal-toggle">
  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
      <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
      <div class="modal-action">
        <label for="my-modal" class="btn">Yay!</label>
      </div>
    </div>
  </div>
</template>

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
.secondary {
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(117,11,11,1) 36%, rgba(111,10,10,1) 65%, rgba(0,0,0,1) 100%);
}
</style>
