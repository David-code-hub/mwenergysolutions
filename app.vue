<template>
  <div class="mx-auto w-fit overflow-hidden">
    <Head>
      <Title>Mwenergysolutions</Title>
      <Meta
        name="description"
        content="
    Here at MW ENERGY SOLUTIONS, we're dedicated to keeping the heart of your vessel beating strong.
      "
      />
    </Head>
    <div class="h-[100vh] w-full justify-center flex flex-col" v-if="loading">
      <div>
        <img
          src="@/assets/images/blackLogo.png"
          alt="mwenergysolutions logo"
          class="w-40 h-auto my-auto bounce-animation"
        />
        <p class="mt-3 font-normal text-md text-center">
          loading, please wait...
        </p>
      </div>
    </div>
    <NuxtLayout v-else>
      <Navigation />
      <Header />
      <Services />
      <About />
      <ConnectWithUs />
      <Footer />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(true);
//meta data
useSeoMeta({
  title: "Mwenergysolutions,WELCOME TO OUR CORNER OF THE SEA.",
  ogTitle: "MWenergysolutions,WELCOME TO OUR CORNER OF THE SEA.",
  description:
    "Here at MW ENERGY SOLUTIONS, we're dedicated to keeping the heart of your vessel beating strong.",
  ogDescription:
    "Here at MW ENERGY SOLUTIONS, we're dedicated to keeping the heart of your vessel beating strong.",
  ogImage: "@/assets/images/logo.png",
});

nuxtApp.hook("app:mounted", () => {
  loading.value = false;
});

nuxtApp.hook("app:beforeMount", () => {
  loading.value = true;
});
</script>
