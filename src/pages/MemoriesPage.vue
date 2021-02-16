<template>
  <base-layout page-title="Memories page">
    <h2>dede</h2>
    <memory-list :memories="memories"></memory-list>
  </base-layout>
</template>

<script>
import MemoryList from "../components/memories/MemoryList.vue";
export default {
  components: {
    MemoryList,
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>
