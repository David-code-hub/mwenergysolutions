<template>
  <div
    class="xl:max-w-[1440px] w-full xl:w-[1440px] relative isolate overflow-hidden bg-blue-circular-gradient"
  >
    <Navigation />
    <div class="lg:py-60 lg:px-32">
      <div class="grid grid-cols-5 text-center">
        <div class="col-span-5 z-10 relative text-center">
          <h1
            class="text-white leading-tight text-8xl font-bold uppercase switzer-font header-text"
          >
            Welcome to our<br />
            corner of the
            <span class="text-outline-medium outlined-text">sea.</span>
          </h1>
          <h1
            class="text-white leading-tight text-8xl font-bold uppercase switzer-font absolute top-0 w-full"
          >
            Welcome to our<br />
            corner of the
            <span class="text-outline-medium wavey-text">sea.</span>
          </h1>
          <!--sub text-->
          <p class="text-white mt-5 text-xl font-normal">
            Here at MW ENERGY SOLUTIONS, we're dedicated to keeping<br />
            the heart of your vessel beating strong. 
          </p>
          <div class="grid grid-cols-2 gap-5 w-fit my-10 mx-auto">
            <a
              class="text-lg py-3 px-5 text-center bg-white rounded-full border-white border-solid border-2 font-normal"
              >Explore More</a
            >
            <a
              class="text-lg text-center py-3 px-5 bg-transparent rounded-full border-white border-solid border-2 text-white font-normal"
              >Get Quote</a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-[url('@/assets/images/mission.avif')] bg-black/60 bg-blend-multiply bg-cover bg-fixed h-full w-full absolute z-2 top-0 bg-top fixed"
    ></div>
    <!--bg-[#0E46A3]-->

    <div
      class="backdrop-blur-md bg-white/5 border-solid border-y-2 border-white py-8 px-20 z-10 absolute bottom-[0em] w-[110vw] rotate-[0deg] overflow-hidden left-[-1em]"
    >
      <p
        class="uppercase text-white text-4xl flex font-bold switzer-font text-nowrap marquee"
      >
        Our Highly Skilled Engineers are readily available Worldwide • 24/7 •
        365 days
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
