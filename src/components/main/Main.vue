<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: ''
      }
    },
    computed:{
    },
    created(){
      this.msg = this.$route.params;
    },
    methods:{
      async onSubmit() {
      }
    },
    beforeDestroy(){

    }
  }
</script>
