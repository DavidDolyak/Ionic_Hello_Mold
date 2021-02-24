<template>
  <base-layout page-title="Memories page">
    <template v-slot:actions-end>
      <add-button-t-b :memories="memories"></add-button-t-b>
      <delete-button-t-b @click="setTbButtonClicked"></delete-button-t-b>
    </template>
    <memory-list
      :memories="memories"
      :isDelButtonClicked="isDelButtonClicked"
    ></memory-list>
    <ion-buttons class="ion-justify-content-center" v-if="isDelButtonClicked">
      <regular-button
        button-title="DELETE"
        @click="deleteMemories"
      ></regular-button>
    </ion-buttons>
  </base-layout>
</template>

<script>
import { IonButtons } from "@ionic/vue";
import MemoryList from "../components/memories/MemoryList.vue";
import AddButtonTB from "../components/buttons/AddButtonTB.vue";
import DeleteButtonTB from "../components/buttons/DeleteButtonTB.vue";
import RegularButton from "../components/buttons/RegularButton.vue";

export default {
  data() {
    return {
      isDelButtonClicked: false,
    };
  },
  components: {
    IonButtons,
    MemoryList,
    AddButtonTB,
    DeleteButtonTB,
    RegularButton,
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
  methods: {
    setTbButtonClicked: async function() {
      if (!this.isDelButtonClicked) {
        this.isDelButtonClicked = true;
      }
    },
    deleteMemories: async function() {
      this.isDelButtonClicked = false;
      this.$store.dispatch("deleteCheckedMemory");
    },
  },
};
</script>

<style scoped></style>
