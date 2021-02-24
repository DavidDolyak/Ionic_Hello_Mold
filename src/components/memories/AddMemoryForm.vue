<template>
  <form class="ion-padding-horizontal" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input
          type="text"
          placeholder="Name your memory"
          required
          v-model="enteredTitle"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-input
          type="text"
          placeholder="Tell other's a little bit about it"
          required
          v-model="enteredDescription"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image url</ion-label>
        <ion-input
          type="url"
          placeholder="Please add img url of the memory cover"
          pattern="url"
          required
          v-model="enteredUrl"
        ></ion-input>
      </ion-item>
    </ion-list>
    <ion-buttons class="ion-justify-content-center">
      <regular-button @click="submitForm" button-title="ADD"></regular-button>
    </ion-buttons>
  </form>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonButtons } from "@ionic/vue";
import RegularButton from "../buttons/RegularButton.vue";
export default {
  name: "AddMemoryForm",
  emits: ["save-memory"],
  data() {
    return {
      enteredTitle: "",
      eneteredDescription: "",
      enteredUrl: "",
    };
  },
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButtons,
    RegularButton,
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
  methods: {
    submitForm() {
      const memoryData = {
        id: "m" + (this.memories.length + 1),
        title: this.enteredTitle,
        description: this.enteredDescription,
        image: this.enteredUrl,
        isChecked: false,
      };
      this.$emit("save-memory", memoryData);
    },
  },
};
</script>
