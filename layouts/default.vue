// layout/default.vue

<template>
  <div class="min-h-screen flex bg-neutral-20 text-neutral-500">
    <!-- Sidebar -->
    <div
      id="app-sidebar"
      class="w-[18rem] bg-neutral-10 dark:bg-neutral-10 h-screen overflow-y-auto fixed lg:fixed top-0 left-0 z-50 lg:z-auto transition-transform duration-300 ease-in-out"
      :class="
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      "
    >
      <div class="h-full">
        <PartialsTheSidebar @close-sidebar="isSidebarOpen = false" />
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="min-h-screen flex flex-col flex-auto relative lg:ml-[18rem]">
      <!-- Header -->
      <PartialsTheHeader
        :customProp="customProp"
        :prevNavProp="prevNavProp"
        :prevNavLink="prevNavLink"
        @toggle-sidebar="toggleSidebar"
      />

      <!-- Page Content -->
      <div class="py-4 sm:px-4 flex flex-col flex-auto text-neutral-500 mt-[70px]">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isSidebarOpen = ref(false);

// Props from route meta
const customProp = ref(route.meta.customProp);
const prevNavProp = ref(route.meta.prevNavProp);
const prevNavLink = ref(route.meta.prevNavLink);

// Watch for changes in route meta properties
watch(
  () => route.meta.customProp,
  (newValue) => {
    customProp.value = newValue;
  }
);
watch(
  () => route.meta.prevNavProp,
  (newValue) => {
    prevNavProp.value = newValue;
  }
);
watch(
  () => route.meta.prevNavLink,
  (newValue) => {
    prevNavLink.value = newValue;
  }
);

// Toggle Sidebar
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

