<template>
  <div
    class="xl:max-w-[1440px] w-full 2xl:w-[1440px] lg:w-[100vw] relative isolate overflow-hidden bg-blue-circular-gradient"
  >
    <div class="lg:py-60 lg:px-32 py-10 px-5 lg:mt-0 mt-24">
      <div class="grid grid-cols-5 text-center">
        <div
          class="z-10 rounded-full w-fit text-gray-300 capitalize text-sm border border-gray-500 px-4 py-1 flex gap-2 items-center col-span-5 mx-auto mb-3"
        >
          <div class="h-2 w-2 bg-red-600 rounded-full animate-pulse"></div>
          Available Worldwide 24/7
        </div>
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
            class="grid lg:grid-cols-2 lg:w-fit w-full gap-5 lg:my-10 mb-20 mt-10 mx-auto"
          >
            <a
              href="#ourServices"
              class="text-lg lg:py-3 lg:px-5 py-2 px-3 text-center bg-white rounded-full border-white border-solid border-2 font-normal hover:opacity-90"
              >Find Out More</a
            >
            <a
              href="mailto:info@mwenergysolutions.co.za"
              class="text-lg text-center lg:py-3 lg:px-5 py-2 px-3 bg-transparent rounded-full border-white border-solid border-2 text-white font-normal hover:bg-white hover:text-black ease-in duration-300"
              >Get Quote</a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-[url('@/assets/images/mission.webp')] bg-black/60 bg-blend-multiply bg-cover h-full w-full absolute z-2 top-0 bg-top"
    ></div>
    <div
      class="flex flex-row backdrop-blur-md bg-white/5 border-solid border-y-2 border-white lg:py-6 py-4 px-20 z-10 absolute bottom-[0em] w-[110vw] rotate-[0deg] overflow-hidden left-[-1em]"
    >
      <div class="!flex flex-row w-full marquee gap-5">
        <div
          class="uppercase text-white lg:text-3xl text-xl flex items-center gap-5 lg:font-semibold font-medium switzer-font text-nowrap"
          v-for="service in services"
          :key="service.title"
        >
          {{ service.title }}
          <Icon name="fontisto:sait-boat" class="size-6 text-white" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    title: "Availability",
  },
  {
    title: "Marine & Land based",
  },
  {
    title: "Consulting",
  },
  {
    title: "Reconditioning",
  },
  {
    title: "Maintenance",
  },
  {
    title: "Installations",
  },
];
</script>
