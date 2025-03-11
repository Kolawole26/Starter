// components/partials/TheHeader.vue
<template>
  <div class="fixed w-full z-40">
    <!-- Header -->
    <div
      class="h-[70px] flex justify-between items-center px-8 bg-neutral-10 border-b border-neutral-100 dark:bg-neutral-10 relative lg:static"
    >
      <!-- Sidebar Toggle Button (Mobile) -->
      <a
        class="cursor-pointer block lg:hidden text-surface-700 dark:text-surface-100 mr-4 mt-1"
        @click="toggleSidebar"
      >
        <i class="pi pi-bars text-2xl" />
      </a>

      <!-- Notification and User Greeting (Mobile) -->
      <a class="cursor-pointer block lg:hidden text-surface-700 dark:text-surface-100">
        <ul class="flex">
          <div class="flex items-center ml-auto">
            <i
              class="pi pi-bell text-base lg:!text-xl leading-none mr-2 cursor-pointer"
              @click="viewNotification = true"
            />
            <p class="mr-1">
              <span class="font-bold text-base">Hello</span> Amaka,
            </p>
            <div>👋</div>
          </div>
        </ul>
      </a>

      <!-- Navigation Breadcrumbs and User Menu (Desktop) -->
      <ul
        class="list-none p-0 m-0 hidden lg:flex lg:items-center select-none lg:flex-row w-auto lg:w-full border lg:border-0 border-surface bg-surface-0 dark:bg-surface-950 right-0 top-full z-10 shadow lg:shadow-none absolute lg:static"
      >
        <!-- Breadcrumbs -->
        <h4 class="font-semibold text-2xl ml-5 capitalize">
          <NuxtLink
            :to="prevNavLink ? `/${prevNavLink}` : `/${prevNavProp}`"
            v-if="prevNavProp"
            class="text-neutral-200"
          >
            {{ prevNavProp }} /
          </NuxtLink>
          {{ customProp }}
        </h4>

        <!-- User Dropdown -->
        <button
          class="flex items-center border-t border-surface lg:border-t-0 ml-auto mr-2"
          @click="toggle"
          aria-haspopup="true"
          aria-controls="overlay_menu"
        >
          <p class="mr-2 text-base font-normal text-neutral-200">
            <span class="text-neutral-500">Mayokun,</span> Admin 💼
          </p>
          <i
            class="pi pi-chevron-down text-sm leading-none"
            :class="onBtnDirection ? 'rotate-[180deg]' : ''"
          />
        </button>

        <!-- Dropdown Menu -->
        <Menu ref="op" id="overlay_menu" :popup="true" :model="items">
          <template #item="{ item, props }">
            <router-link
              v-if="item.route"
              v-slot="{ href, navigate }"
              :to="item.route"
              custom
            >
              <a
                v-ripple
                :href="href"
                v-bind="props.action"
                @click="
                  navigate;
                  onBtnDirection = false;
                "
              >
                <CustomIcon :name="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
              </a>
            </router-link>
            <a
              v-else
              v-ripple
              :href="item.url"
              :target="item.target"
              v-bind="props.action"
            >
              <CustomIcon :name="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </template>
        </Menu>
      </ul>
    </div>

    <!-- Logout Confirmation Modal -->
    <ModalConfirmation
      title="Log Out"
      message="Are you sure you want to logout?"
      primaryButtonText="Log Out"
      :showLockIcon="true"
      :showBackButton="true"
      :closable="false"
      @primary-action="handlePrimaryAction"
      :isVisible="logoutModal"
      @close="logoutModal = false"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

// Props
const props = defineProps({
  customProp: {
    type: String,
    required: true,
  },
  prevNavProp: {
    type: String,
  },
  prevNavLink: {
    type: String,
  },
});

// Dropdown Menu Items
const items = ref([
  {
    label: "Profile",
    icon: "",
    route: "/profile",
  },
  {
    label: "Sign Out",
    icon: "",
    command: () => {
      logoutModal.value = true;
    },
  },
]);

// Refs
const op = ref();
const logoutModal = ref(false);
const onBtnDirection = ref(false);
const viewNotification = ref(false);

// Emit event to toggle sidebar
const emit = defineEmits(["toggle-sidebar"]);

// Toggle Dropdown Menu
const toggle = (event) => {
  onBtnDirection.value = !onBtnDirection.value;
  op.value.toggle(event);
};

// Toggle Sidebar
const toggleSidebar = () => {
  emit("toggle-sidebar");
};

// Handle Logout Action
const handlePrimaryAction = () => {
  navigateTo("/login");
};
</script>
