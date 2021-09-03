<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import {useStore} from 'vuex'
export default {
  setup(){
      const store = useStore()

      store.dispatch('getProducts','hi')
      // console.log(store)
      // console.log(store.state)

      return {
        products:computed(()=> store.state.products)
      }
  }
}
</script>
