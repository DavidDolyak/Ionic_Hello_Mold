<template>
  <ion-button>{{ buttonTitle }}</ion-button>
</template>

<script>
import { IonButton } from "@ionic/vue";
export default {
  props: ["buttonTitle"],
  components: {
    IonButton,
  },
};
</script>

<style scoped>
ion-button {
  width: 35%;
  background-color: var(--ion-color-primary);
  color: var(--ion-color-primary-contrast);
}
</style>
