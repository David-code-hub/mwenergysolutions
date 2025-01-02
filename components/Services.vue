<template>
  <div
    class="xl:max-w-[1440px] bg-white w-full 2xl:w-[1440px] lg:w-[100vw] relative isolate"
    id="ourServices"
  >
    <div class="lg:p-32 py-10 px-5">
      <div class="grid lg:grid-cols-4 gap-x-7 gap-y-7">
        <div class="col-span-2 h-full">
          <div class="text-sm uppercase text-black font-medium mb-1">
            Our Services
          </div>
          <h1
            class="text-black leading-snug lg:text-3xl text-3xl font-semibold capitalize switzer-font mb-3"
          >
            Enhancing Engine Performance with Passion and Precision
          </h1>
          <p
            class="text-base-grey mt-0 lg:text-base text-sm font-normal leading-6"
          >
            At mw energy solutions we're delighted to present our service
            catalog, where we merge passion with precision to elevate marine and
            land-based engine performance.
          </p>
        </div>
        <!--service item
        -->
        <div
          class="hover:bg-gray-100 p-5 rounded-xl"
          v-for="service in services"
          :key="service.title"
        >
          <div class="h-10 w-10 rounded-xl bg-[#0e46a3] mb-3 content-center">
            <nuxt-icon
              :name="service.icon"
              class="text-lg text-white block w-fit mx-auto"
            />
          </div>
          <p class="font-medium text-md text-black mb-1">
            {{ service.title }}
          </p>
          <p class="font-normal text-sm text-base-grey leading-6">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    title: "Availability",
    icon: "clock",
    description:
      "Our Skilled Engineers are readily available Worldwide 24/7 • 365 days",
  },
  {
    title: "Marine & Land based",
    icon: "hand-thumbs-up",
    description:
      "Marine & Land based Medium to High-Speed Engine Commercial pleasure",
  },
  {
    title: "Consulting",
    icon: "telephone",
    description: "Expert guidance and tailored solutions",
  },
  {
    title: "Reconditioning",
    icon: "triangle",
    description: "Engine & Component's Reconditioning",
  },
  {
    title: "Maintenance",
    icon: "eye",
    description: "From In-House Maintenance and tailored solutions",
  },
  {
    title: "Installations",
    icon: "people",
    description: "Various Engine Installations",
  },
];
</script>
