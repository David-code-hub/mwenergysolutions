<template>
  <div
    class="xl:max-w-[1440px] w-full xl:w-[1440px] relative isolate"
    id="ourServices"
  >
    <div class="lg:p-32 py-10 px-5">
      <div class="grid lg:grid-cols-4 gap-x-20 gap-y-20">
        <div class="col-span-2 h-full">
          <h1
            class="text-black leading-snug lg:text-4xl text-3xl font-bold uppercase switzer-font mb-3"
          >
            Our Services
          </h1>
          <p class="text-base-grey mt-0 lg:text-lg text-sm font-normal">
            At mw energy solutions we're delighted to present our service
            catalog, where we merge passion with precision to elevate marine and
            land-based engine performance.
          </p>
          <div class="mt-10">
            <a
              class="text-lg text-center py-3 px-5 bg-transparent rounded-full border-[#0E46A3] border-solid border-2 text-[#0E46A3]"
              >Get Quote</a
            >
          </div>
        </div>
        <!--service item-->
        <div>
          <div
            class="h-[60px] w-[60px] rounded-full bg-[#0e46a338] mb-3 content-center"
          >
            <nuxt-icon
              name="clock"
              class="text-[2em] text-[#0e46a3] block w-fit mx-auto"
            />
          </div>
          <p class="font-medium text-md text-black mb-0">Availability</p>
          <p class="font-normal text-sm text-base-grey">
            Our Highly Skilled Engineers are readily available Worldwide 24/7 •
            365 days
          </p>
        </div>
        <!--service item-->
        <div>
          <div
            class="h-[60px] w-[60px] rounded-full bg-[#0e46a338] mb-3 content-center"
          >
            <nuxt-icon
              name="hand-thumbs-up"
              class="text-[2em] text-[#0e46a3] block w-fit mx-auto"
            />
          </div>
          <p class="font-medium text-md text-black mb-0">Marine & Land based</p>
          <p class="font-normal text-sm text-base-grey">
            Marine & Land based Medium to High-Speed Engine Commercial pleasure
          </p>
        </div>
        <!--service item-->
        <div>
          <div
            class="h-[60px] w-[60px] rounded-full bg-[#0e46a338] mb-3 content-center"
          >
            <nuxt-icon
              name="telephone"
              class="text-[2em] text-[#0e46a3] block w-fit mx-auto"
            />
          </div>
          <p class="font-medium text-md text-black mb-0">Consulting</p>
          <p class="font-normal text-sm text-base-grey">
            Expert guidance and tailored solutions
          </p>
        </div>
        <!--service item-->
        <div>
          <div
            class="h-[60px] w-[60px] rounded-full bg-[#0e46a338] mb-3 content-center"
          >
            <nuxt-icon
              name="triangle"
              class="text-[2em] text-[#0e46a3] block w-fit mx-auto"
            />
          </div>
          <p class="font-medium text-md text-black mb-0">Reconditioning</p>
          <p class="font-normal text-sm text-base-grey">
            Engine & Component's Reconditioning
          </p>
        </div>
        <!--service item-->
        <div>
          <div
            class="h-[60px] w-[60px] rounded-full bg-[#0e46a338] mb-3 content-center"
          >
            <nuxt-icon
              name="eye"
              class="text-[2em] text-[#0e46a3] block w-fit mx-auto"
            />
          </div>
          <p class="font-medium text-md text-black mb-0">Maintenance</p>
          <p class="font-normal text-sm text-base-grey">
            From In-House Maintenance and tailored solutions
          </p>
        </div>
        <!--service item-->
        <div>
          <div
            class="h-[60px] w-[60px] rounded-full bg-[#0e46a338] mb-3 content-center"
          >
            <nuxt-icon
              name="people"
              class="text-[2em] text-[#0e46a3] block w-fit mx-auto"
            />
          </div>
          <p class="font-medium text-md text-black mb-0">Installations</p>
          <p class="font-normal text-sm text-base-grey">
            Various Engine Installations
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
