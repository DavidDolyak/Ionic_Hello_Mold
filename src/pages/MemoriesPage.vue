<template>
  <base-layout page-title="Memories page">
    <template v-slot:actions-end>
      <add-button-t-b></add-button-t-b>
      <delete-button-t-b @click="setTbButtonClicked"></delete-button-t-b>
    </template>
    <memory-list
      :memories="memories"
      :isDelButtonClicked="isDelButtonClicked"
    ></memory-list>
    <ion-buttons class="ion-justify-content-center" v-if="isDelButtonClicked">
      <regular-button
        button-title="DELETE"
        @click="deleteMemories(memories)"
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
      memories: [
        {
          id: "m1",
          title: "First page",
          description: "1.description",
          image:
            "https://images.unsplash.com/photo-1612831660648-ba96d72bfc5b?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80",
          isChecked: false,
        },
        {
          id: "m2",
          title: "Second page",
          description: "2.description",
          image:
            "https://images.unsplash.com/photo-1613405945076-b474aa900fd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
          isChecked: false,
        },
        {
          id: "m3",
          title: "Third page",
          description: "3.description",
          image:
            "https://images.unsplash.com/photo-1613402398192-8a354b291cf5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          isChecked: false,
        },
        {
          id: "m4",
          title: "Forth page",
          description: "4.description",
          image:
            "https://images.unsplash.com/photo-1613403510731-3df789d41171?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
          isChecked: false,
        },
        {
          id: "m5",
          title: "Fifth page",
          description: "5.description",
          image:
            "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          isChecked: false,
        },
      ],
    };
  },
  components: {
    IonButtons,
    MemoryList,
    AddButtonTB,
    DeleteButtonTB,
    RegularButton,
  },
  methods: {
    setTbButtonClicked: async function() {
      if (!this.isDelButtonClicked) {
        this.isDelButtonClicked = true;
      }
    },
    deleteMemories: function() {
      this.isDelButtonClicked = false;
      this.memories = this.memories.filter(
        (memory) => memory.isChecked == false
      );
    },
  },
};
</script>

<style scoped></style>
