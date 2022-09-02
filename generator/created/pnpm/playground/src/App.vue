<template>
  <div>虚无模版--{{name}}</div>
</template>

<script lang="ts" >
import { defineComponent } from 'vue'
import { name } from '@xuwu-utils'
export default defineComponent({
  setup() {
    return {
      name
    }
  }
})
</script>
<style lang="less">

</style>
