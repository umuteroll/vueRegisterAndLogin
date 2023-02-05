<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="showDialog">
    <div class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75"></div>
    <div class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div class="w-64 bg-[#1C1F27] rounded-lg p-6">
        <h2 class="text-lg text-white font-bold mb-4">Dikkat!</h2>
        <p class="text-white mb-4">{{ message }}</p>
        <div class="flex items-center justify-end">
          <button
            class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
            @click="closeDialog"
          >
            Tamam
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
  },
};
</script>
