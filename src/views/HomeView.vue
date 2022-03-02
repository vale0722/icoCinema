<template>
  <main>
    <div class="hero min-h-screen principal">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="text-center hero-content text-neutral-content">
        <div class="max-w-md flex flex-col items-center hover:scale-125 duration-100">
          <a href="/cinema">
            <img
              alt="IcoCinema"
              src="@/assets/logo.svg"
              width="300"
              height="300"
            />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="css">
.principal {
  background-image: url("@/assets/images/cinemawelcome.jpg");
}
</style>
