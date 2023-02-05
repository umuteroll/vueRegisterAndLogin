<!-- eslint-disable no-debugger -->
<template>
  <div class="h-screen w-screen bg-[#2E323E] flex justify-center items-center">
    <Form @request='signUpOrSignIn'></Form>
    <Dialog :showDialog="showDialog" :message="dialogMessage" @close="closeDialog"></Dialog>
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
      dialogMessage: '',
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
    signUpOrSignIn(data) {
      this.type = data;
      this.validataFields();
    },
    async callSignUser(requestObj) {
      try {
        await this.fetchSignUser(requestObj);
        if (this.type === 'login') {
          this.checkPasswordIsTrue();
        } else {
          this.$router.push({ path: '/succes' });
          this.fetchSignRequest();
        }
      } catch (err) {
        this.dialogMessage = err;
        this.showDialog = true; }
    },
    validataFields() {
      if (!this.signRequest.email || !this.signRequest.password) {
        this.showDialogHandler('Tüm alanları doldurunuz');
        return;
      }
      if (this.type === 'register') {
        if (!this.signRequest.nameSurname) {
          this.showDialogHandler('Tüm alanları doldurunuz');
          return;
        }
      }
      const requestObj = {
        data: this.signRequest,
        type: this.type,
      };
      this.callSignUser(requestObj);
    },
    checkPasswordIsTrue() {
      if (this.getSignUser.length !== 1) {
        this.showDialogHandler('Böyle bir mail adresi yok!');
        return;
      }
      if (this.signRequest.password === this.getSignUser[0].password) {
        this.fetchSignRequest();
        this.$router.push({ path: '/succes' });
      } else {
        this.showDialogHandler('Yanlış parola girdiniz!');
      }
    },
    fetchSignRequest() {
      this.fetchSignUserRequest({
        nameSurname: '',
        email: '',
        password: '',
      });
    },
    showDialogHandler(text) {
      this.dialogMessage = text;
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
  },
};
</script>