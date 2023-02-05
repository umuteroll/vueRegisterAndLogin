<template>
  <div class="flex items-center justify-center">
    <input
      :value="modelValue"
      :type="type"
      class="
        w-full mx-5 my-2 bg-transparent border-b-[1px] rounded-[3px] border-[#bdbdc0] focus:outline-none py-2
         text-[#FDFEFD] placeholder-[#FDFEFD] font-hind font-normal "
      :placeholder="holder"
      @input="updateValue"
    />
  </div>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    holder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {};
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>