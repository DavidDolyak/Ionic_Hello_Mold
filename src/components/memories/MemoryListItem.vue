<template>
  <ion-item :router-link="`/memories/${memory.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="memory.image" :alt-text="memory.title" />
    </ion-thumbnail>
    <ion-label>{{ memory.title }}</ion-label>
    <ion-checkbox
      v-if="isDelButtonClicked"
      @click="selectCheckbox(memory)"
    ></ion-checkbox>
  </ion-item>
</template>

<script>
import {
  IonItem,
  IonThumbnail,
  IonLabel,
  IonImg,
  IonCheckbox,
} from "@ionic/vue";
export default {
  el: "MemoryListItem",
  props: ["memory", "isDelButtonClicked"],
  components: {
    IonItem,
    IonThumbnail,
    IonLabel,
    IonImg,
    IonCheckbox,
  },
  methods: {
    selectCheckbox: async function(memory) {
      if (memory.isChecked == false) {
        memory.isChecked = true;
      } else if (memory.isChecked == true) {
        memory.isChecked = false;
      }
    },
  },
};
</script>
