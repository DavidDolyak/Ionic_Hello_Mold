<template>
  <ion-button
    slot="icon-only"
    class="add-button"
    shape="round"
    :alt-text="Delete"
  >
    <ion-icon :icon="closeOutline"></ion-icon>
  </ion-button>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { closeOutline } from "ionicons/icons";
export default {
  components: { IonButton, IonIcon },
  data() {
    return { closeOutline };
  },
};
</script>
