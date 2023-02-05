<!-- eslint-disable no-debugger -->
<template>
  <div class="h-screen w-screen bg-[#2E323E] flex justify-center items-center">
    <Form @request='signUpOrSignIn'></Form>
    <Dialog :showDialog="showDialog" @close="closeDialog"></Dialog>
  </div>
</template>
<script>
import Form from '../components/Form.vue';
import Dialog from '../components/Dialog.vue';
import { mapActions, mapGetters } from 'vuex';
import {
  GET_SIGN_USER, FETCH_SIGN_USER, GET_SIGN_USER_REQUEST, FETCH_SIGN_USER_REQUEST,
} from '../store/constants';
export default {
  components: {
    Form,
    Dialog,
  },
  data() {
    return {
      type: '',
      showDialog: false,
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
      if (this.signRequest.nameSurname !== '' || !('nameSurname' in this.signRequest)) {
        this.type = 'POST';
      }
      else {
        this.type = 'GET';
      }
      this.validataFields();
    },
    async callSignUser(requetObj) {
      try {
        await this.fetchSignUser(requetObj);
        if (requetObj.type === 'GET') {
          this.checkPasswordIsTrue();
        } else {
          this.$router.push({ path: '/succes' });
          this.fetchSignRequest();
        }
      } catch (err) {
        console.log(err);
      }
    },
    validataFields() {
      const requestObj = {
        data: this.signRequest,
        type: this.type,
      };
      if (!requestObj.data.email || !requestObj.data.password) {
        alert('Tüm alanları doldurunuz.');
        return;
      }
      if (requestObj.type === 'POST') {
        if (!requestObj.data.nameSurname) {
          alert('Tüm alanları doldurunuz.');
          return;
        }
      }
      this.callSignUser(requestObj);
    },
    checkPasswordIsTrue() {
      if (this.signRequest.password === this.getSignUser[0].password) {
        this.fetchSignRequest();
        this.$router.push({ path: '/succes' });
      } else {
        this.showDialog = true;
      }
    },
    fetchSignRequest() {
      this.fetchSignUserRequest({
        nameSurname: '',
        email: '',
        password: '',
      });
    },
    closeDialog() {
      this.showDialog = false;
    },
  },
};
</script>