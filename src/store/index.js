import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          title: "First page",
          description: "1.description",
          image:
            "https://images.unsplash.com/photo-1612831660648-ba96d72bfc5b?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80",
        },
        {
          id: "m2",
          title: "Second page",
          description: "2.description",
          image:
            "https://images.unsplash.com/photo-1613405945076-b474aa900fd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
        },
        {
          id: "m3",
          title: "Third page",
          description: "3.description",
          image:
            "https://images.unsplash.com/photo-1613402398192-8a354b291cf5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        {
          id: "m4",
          title: "Forth page",
          description: "4.description",
          image:
            "https://images.unsplash.com/photo-1613403510731-3df789d41171?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
        },
        {
          id: "m5",
          title: "Fifth page",
          description: "5.description",
          image:
            "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
      ],
    };
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id == memoryId);
      };
    },
  },
});

export default store;
