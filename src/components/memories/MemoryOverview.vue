<template>
  <ion-content>
    <ion-img :src="memoryData.image" :alt-text="memoryData.title" />
    <h1 class="ion-text-center">{{ memoryData.title }}</h1>
    <p class="ion-text-center">{{ memoryData.description }}</p>
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
