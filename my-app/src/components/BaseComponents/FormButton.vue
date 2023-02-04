<template>
  <div class="flex items-center justify-center">
    <button
      :class="['my-4', 'border-2', 'border-[#8CA632]','rounded-[3px]', 'text-white',
               {'bg-[#8CA632]': selectedTab === 'login', 'bg-[#E84362]' : selectedTab === 'register','border-[#E84362]': selectedTab === 'register'}]"
      style="width: 774px; height: 46px;"
    > <p v-if='selectedTab ==="login"' :class="['text-center', 'font-hind', 'font-normal', 'leading-tight','text-white']">
        Giriş Yap
      </p>
      <p v-else :class="['text-center', 'font-hind', 'font-normal', 'leading-tight','text-white']">
        Üye Ol
      </p>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    selectedTab: {
      type: String,
      default: 'login',
    },
  },
  data() {
    return {
    };
  },
};
</script>