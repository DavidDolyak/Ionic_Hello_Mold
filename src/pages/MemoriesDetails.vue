<template>
  <base-layout
    :page-title="loadedMemory ? 'Memories Details' : 'Loading...'"
    pageDefaultBackLink="/memories"
  >
    <h2 v-if="!loadedMemory">Could not find a memory for given id</h2>
    <memory-overview v-else :memoryData="loadedMemory" />
  </base-layout>
</template>

<script>
import MemoryOverview from "../components/memories/MemoryOverview.vue";
export default {
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },
  components: {
    MemoryOverview,
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
};
</script>
