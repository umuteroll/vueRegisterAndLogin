<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="rounded w-[50.875rem] shadow-lg bg-[#1C1F27]">
    <SwitchHeaderTab></SwitchHeaderTab>
    <FormInput></FormInput>
    <FormInput></FormInput>
    <FormButton></FormButton>
  </div>
</template>
<script>
import SwitchHeaderTab from './BaseComponents/SwitchHeaderTab.vue';
import FormInput from './BaseComponents/FormInput.vue';
import FormButton from './BaseComponents/FormButton.vue';
export default {
  components: {
    SwitchHeaderTab,
    FormInput,
    FormButton,
  },
  data() {
    return {
    };
  },
  computed: {
  },
  async mounted() {
  },
  methods: {
  },
};
</script>