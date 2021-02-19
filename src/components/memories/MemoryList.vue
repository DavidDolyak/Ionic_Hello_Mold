<template>
  <ion-list>
    <memory-list-item
      v-for="memory in memories"
      :key="memory.id"
      :memory="memory"
      :isDelButtonClicked="isDelButtonClicked"
    />
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import MemoryListItem from "../memories/MemoryListItem.vue";
export default {
  props: ["memories", "isDelButtonClicked"],
  components: {
    IonList,
    MemoryListItem,
  },
};
</script>
