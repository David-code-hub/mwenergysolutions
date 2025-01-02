<template>
  <div
    class="xl:max-w-[1440px] w-full 2xl:w-[1440px] lg:w-[100vw] relative isolate"
    id="testimonials"
  >
    <Icon
      name="fontisto:quote-right"
      class="absolute right-10 top-10 text-gray-500 opacity-30 size-20"
    />
    <Icon
      name="fontisto:quote-left"
      class="absolute sm:block hidden left-10 bottom-10 text-gray-500 opacity-30 size-20"
    />
    <div class="lg:p-32 py-10 px-5">
      <div class="lg:grid grid-cols-5 gap-10 h-full pb-xl">
        <div class="relative h-full lg:mb-0 mb-5 col-span-2">
          <div class="rounded-xl bg-transparent h-full">
            <Icon
              name="fontisto:star"
              class="size-4 mr-1 text-yellow-500"
              v-for="i in 5"
              :key="i"
            />
            <p class="mt-3 lg:text-base text-sm text-base-grey font-regular">
              My interaction and experience with my energy solutions has been a
              great experience, there professionalism and work ethic is truly
              amazing, there follow up service to work done is very rare to find
              in the marine business and a great joy. I am very keen to keep
              working with them in the future and you gladly recommend there
              services to any of my colleagues and persons that require
              assistance.
            </p>

            <div class="flex gap-1 mt-5">
              <div>
                <img
                  src="@/assets/images/avatarplaceholder.jpg"
                  class="w-14 rounded-full object-cover"
                  alt="Avatar"
                />
              </div>
              <div class="my-auto">
                <p class="text-black">Sports Aviations</p>
                <p class="mt-none text-xs text-base-grey">Testimonial</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-3">
          <div class="rounded-xl bg-transparent">
            <Icon
              name="fontisto:star"
              class="size-4 mr-1 text-yellow-500"
              v-for="i in 5"
              :key="i"
            />
            <p class="mt-3 lg:text-base text-sm text-base-grey font-regular">
              I asked Marcelino and Wesley at MW Energy Solutions to look at my
              Yanmar 2GM20C boat engine as it was proving hard to start with a
              lot of smoke and I knew that they had formal Yanmar training. One
              of my concerns with using contractors is trying to manage access
              to the boat during office hours and the inconvenience if they are
              late or not prepared. I am pleased to say Marcelino and Wesley
              were both always on time, had all the necessary tools to complete
              the job, worked alone when needed, locked up after themselves and
              completed the job without my further involvement. Their diagnosis
              was methodical, well explained and documented. I agreed to their
              recommendations and the motor is now starting better than ever
              without the smoke issue. I will definitely use their services
              again and recommend their work.
            </p>
            <div class="flex gap-1 mt-5">
              <div class="relative">
                <img
                  src="@/assets/images/avatarplaceholder.jpg"
                  class="w-14 rounded-full object-cover"
                  alt="Avatar"
                />
              </div>
              <div class="my-auto">
                <p class="text-black">Jed Hewson</p>
                <p class="mt-none text-xs text-base-grey">Testimonial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
