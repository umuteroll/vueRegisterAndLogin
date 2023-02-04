<template>
  <div class="flex m-5">
    <div
      :class="['tab', 'border-b-2', 'font-medium', 'text-center','w-full',
               {'border-[#8CA632]': selectedTab === 'login','border-[#9092967d]': selectedTab === 'register'}]"
      @click="selectedTab = 'login'"
    >
      <p :class="['h-8', 'text-center', 'font-hind', 'font-normal', 'leading-tight',
                  ,{'text-[#778D30]': selectedTab === 'login', 'text-[#65696C]' : selectedTab === 'register'} ]"
      >
        Giriş Yap
      </p>
    </div>
    <div
      :class="['tab', 'border-b-2', 'font-medium', 'text-center', 'w-full',
               {'border-red-500': selectedTab === 'register','border-[#9092967d]': selectedTab === 'login'},]"
      @click="selectedTab = 'register'"
    >
      <p :class="['h-8', 'text-center', 'font-hind', 'font-normal', 'leading-tight',
                  ,{'text-[#E84362]': selectedTab === 'register' ,'text-[#65696C]': selectedTab === 'login' } ]"
      >
        Üye Ol
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedTab: 'login',
    };
  },
};
</script>