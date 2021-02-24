<template>
  <base-layout pageTitle="Add your memory">
    <add-memory-form @save-memory="saveMemory" />
  </base-layout>
</template>

<script>
import AddMemoryForm from "../components/memories/AddMemoryForm.vue";
export default {
  name: "AddMemoryPage",
  components: {
    AddMemoryForm,
  },
  methods: {
    saveMemory(memoryData) {
      this.$store.dispatch("addMemory", memoryData);
      this.$router.replace("/memories");
    },
  },
};
</script>

<style scoped>
ion-input {
  border: 1px solid gray;
  margin-top: 16px;
}
</style>
