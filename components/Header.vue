<template>
  <div
    class="xl:max-w-[1440px] w-full xl:w-[1440px] relative isolate overflow-hidden bg-blue-circular-gradient"
  >
    <Navigation />
    <div class="lg:py-60 lg:px-32 py-10 px-5">
      <div class="grid grid-cols-5 text-center">
        <div class="col-span-5 z-10 relative text-center">
          <h1
            class="text-white leading-tight lg:text-8xl text-5xl lg:font-bold font-semibold uppercase switzer-font header-text"
          >
            Welcome to our<br class="lg:block hidden" />
            corner of the
            <span class="text-outline-medium outlined-text">sea.</span>
          </h1>
          <h1
            class="text-white leading-tight lg:text-8xl text-5xl lg:font-bold font-semibold uppercase switzer-font absolute top-0 w-full"
          >
            Welcome to our<br class="lg:block hidden" />
            corner of the
            <span class="text-outline-medium wavey-text">sea.</span>
          </h1>
          <!--sub text-->
          <p class="text-white mt-5 lg:text-xl text-sm font-normal">
            Here at MW ENERGY SOLUTIONS, we're dedicated to keeping<br
              class="lg:block hidden"
            />
            the heart of your vessel beating strong. 
          </p>
          <div
            class="grid lg:grid-cols-2 lg:w-fit w-full gap-5 w-fit lg:my-10 mb-20 mt-10 mx-auto"
          >
            <a
              class="text-lg lg:py-3 lg:px-5 py-2 px-3 text-center bg-white rounded-full border-white border-solid border-2 font-normal"
              >Explore More</a
            >
            <a
              class="text-lg text-center lg:py-3 lg:px-5 py-2 px-3 bg-transparent rounded-full border-white border-solid border-2 text-white font-normal"
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
      class="backdrop-blur-md bg-white/5 border-solid border-y-2 border-white lg:py-8 py-4 px-20 z-10 absolute bottom-[0em] w-[110vw] rotate-[0deg] overflow-hidden left-[-1em]"
    >
      <p
        class="uppercase text-white lg:text-4xl text-xl flex lg:font-bold font-medium switzer-font text-nowrap marquee"
      >
        Our Highly Skilled Engineers are readily available Worldwide • 24/7 •
        365 days
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
