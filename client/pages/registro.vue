<template>
  <div>
    <registro/>
  </div>
</template>

<script>
import registro from '../components/registro'

export default {
  middleware: 'login',
  components:{
    registro
  }
}
</script>