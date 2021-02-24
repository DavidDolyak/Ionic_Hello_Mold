<template>
  <ion-content>
    <ion-img :src="memory.image" :alt-text="memory.title" />
    <h1 class="ion-text-center">{{ memory.title }}</h1>
    <p class="ion-text-center">{{ memory.description }}</p>
  </ion-content>
</template>

<script>
import { IonImg, IonContent } from "@ionic/vue";
export default {
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },
  components: {
    IonImg,
    IonContent,
  },
  computed: {
    memory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
};
</script>
