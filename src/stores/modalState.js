import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modalState', () => {
    const modalState = ref(false);

    const setModalState = () => {
        modalState.value = !modalState.value;
    };

    return { modalState, setModalState };
});
