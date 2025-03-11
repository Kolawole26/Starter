// components/partials/TheSidebar.vue

<template>
  <div class="flex h-screen bg-primary-50">
    <!-- Sidebar -->
    <div
      class="w-[18rem] border-r border-neutral-100 fixed h-full flex flex-col text-neutral-500 bg-primary-50 overflow-y-scroll lg:overflow-y-auto no-scrollbar transition-all duration-300 ease-in-out overflow-x-hidden"
    >
      <!-- Cancel Icon (Only for Mobile) -->
      <button
        class="absolute top-7 right-4 lg:hidden"
        @click="emit('close-sidebar')"
      >
        <i
          class="pi pi-times text-neutral-500 text-base border border-neutral-500 p-1 rounded-full"
        ></i>
      </button>
      <!-- Sidebar Content -->
      <a class="inline-flex items-center gap-3 px-7 py-4 cursor-pointer">
        <BaseCustomIcon name="logo" />
      </a>
      <div
        class="w-[calc(100%-3rem)] mx-auto h-[1px] bg-surface-200 dark:bg-surface-700 px-6"
      />
      <div class="px-6 pt-6 flex-1">
        <ul ref="outerDiv" class="flex flex-col gap-2 overflow-hidden">
          <template v-for="(item, index) of navs" :key="index">
            <li>
              <NuxtLink
                :to="item.path"
                :class="
                  selectedNav === item.label || route.path === item.path
                    ? 'bg-primary-200 text-surface-900 shadow-sm'
                    : 'border-transparent hover:border-surface-200 hover:bg-primary-75 text-surface-600'
                "
                class="z-30 relative flex items-center gap-2 px-3 py-3 rounded-lg cursor-pointer transition-all"
                @click="selectedNav = item.label"
              >
                <BaseCustomIcon :name="item.icon" />
                <span class="flex-1 font-medium text-sm">{{ item.label }}</span>
                <i
                  v-if="item?.subMenu"
                  class="pi pi-chevron-down text-sm leading-none"
                />
              </NuxtLink>
              <div
                v-if="selectedNav === item.label && item?.subMenu"
                class="relative pl-1.5 flex flex-col transition-all duration-500 mt-2"
                :class="
                  selectedNav === item.label && item?.subMenu
                    ? 'opacity-100'
                    : 'opacity-0'
                "
              >
                <template v-for="(subItem, index) of item.subMenu" :key="index">
                  <div
                    class="cursor-pointer relative px-3.5 py-2 flex items-center transition-all"
                    @click="selectedSubNav = subItem.label"
                  >
                    <svg
                      width="18"
                      height="44"
                      viewBox="0 0 18 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute left-4 -top-2"
                    >
                      <path
                        :d="getLinePath(index, item.subMenu.length)"
                        class="stroke-neutral-200 dark:stroke-surface-600"
                        stroke-width="1"
                      />
                      <path
                        d="M11.136 26.2862L11.1313 26.2863C11.1243 26.2863 11.1174 26.2849 11.1109 26.2823C11.1045 26.2796 11.0986 26.2756 11.0937 26.2707L11.0937 26.2707L11.0917 26.2687C11.0805 26.2575 11.0742 26.2422 11.0742 26.2263C11.0742 26.2105 11.0805 26.1953 11.0917 26.1841C11.0917 26.184 11.0917 26.184 11.0917 26.184L14.4286 22.8471L14.7822 22.4936L14.4286 22.14L11.1009 18.8123C11.0922 18.8014 11.0875 18.7878 11.0877 18.7737C11.088 18.7582 11.0943 18.7434 11.1052 18.7324C11.1162 18.7214 11.131 18.7151 11.1466 18.7149C11.1606 18.7146 11.1743 18.7193 11.1852 18.7281L14.9083 22.4512C14.9195 22.4625 14.9258 22.4777 14.9258 22.4936C14.9258 22.5095 14.9195 22.5247 14.9083 22.5359L11.1758 26.2685L11.1758 26.2685L11.1736 26.2707C11.1687 26.2756 11.1628 26.2796 11.1564 26.2823C11.1499 26.2849 11.143 26.2863 11.136 26.2862Z"
                        class="stroke-neutral-200 fill-neutral-200 dark:stroke-surface-600 dark:fill-surface-600"
                      />
                      <path
                        d="M1 14V17.5C1 20.2614 3.23858 22.5 6 22.5H15"
                        class="stroke-neutral-200 dark:stroke-surface-600"
                        stroke-width="1"
                      />
                      <template v-if="index === getSelectedIndex()">
                        <path
                          d="M11.136 26.2862L11.1313 26.2863C11.1243 26.2863 11.1174 26.2849 11.1109 26.2823C11.1045 26.2796 11.0986 26.2756 11.0937 26.2707L11.0937 26.2707L11.0917 26.2687C11.0805 26.2575 11.0742 26.2422 11.0742 26.2263C11.0742 26.2105 11.0805 26.1953 11.0917 26.1841C11.0917 26.184 11.0917 26.184 11.0917 26.184L14.4286 22.8471L14.7822 22.4936L14.4286 22.14L11.1009 18.8123C11.0922 18.8014 11.0875 18.7878 11.0877 18.7737C11.088 18.7582 11.0943 18.7434 11.1052 18.7324C11.1162 18.7214 11.131 18.7151 11.1466 18.7149C11.1606 18.7146 11.1743 18.7193 11.1852 18.7281L14.9083 22.4512C14.9195 22.4625 14.9258 22.4777 14.9258 22.4936C14.9258 22.5095 14.9195 22.5247 14.9083 22.5359L11.1758 26.2685L11.1758 26.2685L11.1736 26.2707C11.1687 26.2756 11.1628 26.2796 11.1564 26.2823C11.1499 26.2849 11.143 26.2863 11.136 26.2862Z"
                          class="stroke-neutral-500 fill-neutral-500 dark:stroke-surface-0 dark:fill-surface-0"
                        />
                        <path
                          d="M1 14V17.5C1 20.2614 3.23858 22.5 6 22.5H15"
                          class="stroke-neutral-500 dark:stroke-surface-0"
                          stroke-width="1"
                        />
                      </template>
                      <path
                        v-if="index <= getSelectedIndex()"
                        :d="getActiveLinePath(index, getSelectedIndex())"
                        class="stroke-neutral-500 dark:stroke-surface-0"
                        stroke-width="1"
                      />
                    </svg>
                    <NuxtLink
                      :to="subItem.path"
                      class="leading-relaxed font-medium text-xs transition-all ml-8"
                      :class="
                        selectedSubNav === subItem.label ||
                        route.path === subItem.path
                          ? 'text-neutral-500 dark:text-neutral-500'
                          : 'text-neutral-200 dark:text-neutral-200 hover:text-primary-200 dark:hover:text-primary-200'
                      "
                    >
                      {{ subItem.label }}
                    </NuxtLink>
                  </div>
                </template>
              </div>
            </li>
          </template>
        </ul>
      </div>
      <ul class="flex flex-col gap-2 px-6 py-3">
        <template v-for="(item, index) of bottomNavs" :key="index">
          <li
            :class="
              selectedNav === item.label || route.path === item.path
                ? 'bg-primary-200 text-surface-900 shadow-sm'
                : 'border-transparent hover:bg-primary-75 text-surface-600'
            "
            class="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all"
            @click="selectedNav = item.label"
          >
            <BaseCustomIcon :name="item.icon" />
            <span class="flex-1 font-medium">{{ item.label }}</span>
            <i
              v-if="item?.subMenu"
              class="pi pi-chevron-down text-sm leading-none"
            />
          </li>
        </template>
      </ul>
      <div class="bg-primary-50">
        <div class="px-[35px] p-3 flex items-center switch pb-3">
          <InputSwitch v-model="checked" class="" @change="themeChange" />
          <p class="ml-3 text-[#676A6C] dark:text-[#E8E9E9]">Light Mode</p>
        </div>
        <div
          class="w-[calc(100%-3rem)] mx-auto h-[1px] bg-surface-200 dark:bg-surface-700 px-6 border-t border-neutral-50"
        />
        <div
          class="px-6 py-4 cursor-pointer bg-primary-50"
          @click="showModal = true"
        >
          <li
            class="flex items-center gap-2 px-3 py-3 rounded-lg cursor-pointer transition-all border-transparent hover:bg-primary-75 text-surface-600"
          >
            <BaseCustomIcon name="logout" />
            <span class="flex-1 font-medium text-sm">Sign Out</span>
          </li>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1" />
    <ModalConfirmation
      title="Log Out"
      message="Are you sure you want to logout?"
      primaryButtonText="Log Out"
      :showLockIcon="true"
      :showBackButton="true"
      :closable="false"
      @primary-action="handlePrimaryAction"
      :isVisible="showModal"
      @close="showModal = false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "#vue-router";

const route = useRoute();
const selectedNav = ref("");
const selectedSubNav = ref(null);
const bottomNavs = ref([]);
const navs = ref([
  {
    icon: "home",
    label: "Dashboard",
    path: "/",
  },
  {
    icon: "globe",
    label: "Services",
    path: "/services",
  },
  {
    icon: "person",
    label: "Users",
    path: "/users",
  },
  {
    icon: "speaker",
    label: "Referrals",
    path: "/referrals",
  },
  {
    icon: "gifts",
    label: "Points",
    path: "/points",
  },
  {
    icon: "transaction",
    label: "Transactions",
    path: "/transactions",
  },
  {
    icon: "wallet",
    label: "Wallets",
    path: "/wallets",
  },
  {
    icon: "transition_slide",
    label: "Banner",
    path: "/banner",
  },
  {
    icon: "teams",
    label: "Teams",
    subMenu: [
      {
        label: "Team Members",
        path: "/teams",
      },
      {
        label: "Audit",
        path: "/teams/audit",
      },
    ],
  },
  {
    icon: "settings",
    label: "Settings",
    path: "/settings",
  },
]);

const emit = defineEmits(["close-sidebar"]);

const getLinePath = (index, totalItems) => {
  if (index === 0) {
    return `M1 0 V40`;
  } else if (index === totalItems - 1) {
    return `M1 -4 V14`;
  } else {
    return `M1 -4 V40`;
  }
};

const getActiveLinePath = (index, selectedIndex) => {
  if (index === 0) {
    return `M1 0 V${index === selectedIndex ? "14" : "40"}`;
  } else if (index === selectedIndex) {
    return `M1 -4 V14`;
  } else {
    return `M1 -4 V40`;
  }
};

const getSelectedIndex = () => {
  return navs.value[8].subMenu.findIndex(
    (subItem) => subItem.label === selectedSubNav.value
  );
};

const showModal = ref(false);

const handlePrimaryAction = () => {
  navigateTo("/login");
};

const handleBack = () => {
  console.log("Back button clicked");
};

const checked = ref(false);

const themeChange = () => {
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
};

</script>
