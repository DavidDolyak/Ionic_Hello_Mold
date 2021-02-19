<template>
  <ion-button
    slot="icon-only"
    class="add-button"
    shape="round"
    router-link="/memories/add"
    :alt-text="Add"
  >
    <ion-icon :icon="add"></ion-icon>
  </ion-button>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
export default {
  components: { IonButton, IonIcon },
  data() {
    return { add };
  },
};
</script>

<style>
.add-button {
  color: var(--ion-color-primary-contrast);
  --padding-bottom: 5px;
  --padding-top: 5px;
  width: 40%;
  height: 10%;
  border-radius: 100%;
  border: 1px solid var(--ion-color-primary-contrast);
}
.add-button:active,
.add-button:focus {
  border: 1px solid var(--ion-color-primary-contrast);
  border-radius: 100%;
}
</style>
