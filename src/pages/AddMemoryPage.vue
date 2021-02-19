<template>
  <base-layout pageTitle="Add your memory">
    <ion-content class="ion-padding-horizontal">
      <ion-input
        placeholder="Please add img url of the memory cover"
        pattern="url"
        type="url"
        >Image link</ion-input
      >
      <ion-input placeholder="Name your memory">Title</ion-input>
      <ion-input placeholder="Tell other's a little bit about it"
        >Description</ion-input
      >
    </ion-content>
    <regular-button button-title="ADD"></regular-button>
  </base-layout>
</template>

<script>
import { IonContent, IonInput } from "@ionic/vue";
import RegularButton from "../components/buttons/RegularButton.vue";
export default {
  components: {
    IonInput,
    IonContent,
    RegularButton,
  },
};
</script>

<style scoped>
ion-input {
  border: 1px solid gray;
  margin-top: 16px;
}
</style>
