<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="rounded w-[50.875rem] shadow-lg bg-[#1C1F27]">
    <SwitchHeaderTab @selected-tab='selectedTabHandler'></SwitchHeaderTab>
    <FormInput v-if="selectedTab === 'register'" v-model='signRequest.nameSurname' :holder="'Adınız Soyadınız'"></FormInput>
    <FormInput v-model="signRequest.email" :holder="'E- Posta Adresiniz'"></FormInput>
    <FormInput v-model="signRequest.password" :holder="'Parolanız'"></FormInput>
    <FormButton :selectedTab='selectedTab' @click="setRequestTheState"></FormButton>
  </div>
</template>
<script>
import SwitchHeaderTab from './BaseComponents/SwitchHeaderTab.vue';
import FormInput from './BaseComponents/FormInput.vue';
import FormButton from './BaseComponents/FormButton.vue';
import { mapActions, mapGetters } from 'vuex';
import {
  GET_SIGN_USER_REQUEST, FETCH_SIGN_USER_REQUEST,
} from '../store/constants';
export default {
  components: {
    SwitchHeaderTab,
    FormInput,
    FormButton,
  },
  data() {
    return {
      selectedTab: 'login',
    };
  },
  computed: {
    ...mapGetters({
      signRequest: GET_SIGN_USER_REQUEST,
    }),
  },
  async mounted() {
  },
  methods: {
    ...mapActions({
      fetchSignUserRequest: FETCH_SIGN_USER_REQUEST,
    }),
    selectedTabHandler(data) {
      this.selectedTab = data;
    },
    setRequestTheState() {
      this.fetchSignUserRequest(this.signRequest);
      this.$emit('request');
    },
  },
};
</script>