<!-- eslint-disable no-debugger -->
<template>
  <div class="h-screen w-screen bg-[#2E323E] flex justify-center items-center">
    <Form @request='signUpOrSignIn'></Form>
  </div>
</template>
<script>
import Form from '../components/Form.vue';
import { mapActions, mapGetters } from 'vuex';
import {
  GET_SIGN_USER, FETCH_SIGN_USER, GET_SIGN_USER_REQUEST, FETCH_SIGN_USER_REQUEST,
} from '../store/constants';
export default {
  components: {
    Form,
  },
  data() {
    return {
      type: '',
    };
  },
  computed: {
    ...mapGetters({
      getSignUser: GET_SIGN_USER,
      signRequest: GET_SIGN_USER_REQUEST,
    }),
  },
  mounted() {
  },
  methods: {
    ...mapActions({
      fetchSignUser: FETCH_SIGN_USER,
      fetchSignUserRequest: FETCH_SIGN_USER_REQUEST,
    }),
    signUpOrSignIn() {
      if (this.getSignUser.nameSurname !== '') {
        this.type = 'POST';
      }
      else {
        this.type = 'GET';
      }
      this.callSignUser();
    },
    async callSignUser() {
      const obj = {
        data: this.getSignUser,
        type: this.type,
      };
      try {
        await this.fetchSignUser(obj);
        this.fetchSignUserRequest({});
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>