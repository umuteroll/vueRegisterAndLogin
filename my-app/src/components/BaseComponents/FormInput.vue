<template>
  <div class="flex items-center justify-center">
    <input
      :value="value"
      class='w-full mx-5 my-2 bg-transparent border-b-[1px] rounded-[3px]
       border-[#bdbdc0] focus:outline-none py-2 text-[#FDFEFD] placeholder-[#FDFEFD] font-hind font-normal'
      placeholder="E- Posta Adresiniz"
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 'selam',
    };
  },
};
</script>