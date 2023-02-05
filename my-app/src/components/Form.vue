<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="rounded w-[50.875rem] shadow-lg bg-[#1C1F27]">
    <SwitchHeaderTab @selected-tab='selectedTabHandler'></SwitchHeaderTab>
    <FormInput v-if="selectedTab === 'register'" v-model='signRequest.nameSurname' :holder="'Adınız Soyadınız'"></FormInput>
    <FormInput v-model="signRequest.email" :holder="'E- Posta Adresiniz'"></FormInput>
    <FormInput v-model="signRequest.password" :holder="'Parolanız'"></FormInput>
    <FormButton :selectedTab='selectedTab' @click="denemeler"></FormButton>
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
      selectedTab: 'login',
      signRequest: {
        nameSurname: '',
        email: '',
        password: '',
      },
    };
  },
  computed: {
  },
  async mounted() {
  },
  methods: {
    selectedTabHandler(data) {
      this.selectedTab = data;
    },
    denemeler() {
      console.log(this.deneme);
    },
  },
};
</script>