// middleware/auth.js
import { useUserDetailsStore } from "@/store/userDetailsStore";
import { storeToRefs } from "pinia";

export default defineNuxtRouteMiddleware(() => {
  const { user } = storeToRefs(useUserDetailsStore());

    const localUser = JSON.parse(localStorage.getItem('user') || '{}');
  
    user.value = localUser;
 

    if (!( user.value )) return navigateTo('/login');
  });
