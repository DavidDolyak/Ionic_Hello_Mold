<template>
  <ion-content>
    <ion-img :src="memoryData.image" :alt-text="memoryData.title" />
    <h1>{{ memoryData.title }}</h1>
    <h2>{{ memoryData.description }}</h2>
  </ion-content>
</template>

<script>
import { IonImg, IonContent } from "@ionic/vue";
export default {
  props: ["memoryData"],
  components: {
    IonImg,
    IonContent,
  },
};
</script>
