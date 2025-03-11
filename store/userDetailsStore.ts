import {defineStore} from 'pinia';
import {useLocalStorage} from "@vueuse/core"
import {ref} from "vue";

export const useUserDetailsStore = defineStore('userDetails', () => {
    const user = useLocalStorage('user', {});

    return {user};
})