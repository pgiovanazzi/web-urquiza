<template>
   <div class="col-lg-12 col-md-12">
      <div class="row mb-5">
         <small>{{ lastPost.date | formatDate2 }}</small>
      </div>
      <div v-html="lastPost.content"></div>
   </div>
</template>

<script>
export default {
   name: 'ultimaNovedad',
   props: {
      lastPost: {
         type: Object,
         requered: true
      }
   }
}
</script>
