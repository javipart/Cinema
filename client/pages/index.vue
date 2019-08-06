<template>
  <div>
    <login/>
  </div>
</template>

<script>
import Login from '../components/login'

export default {
  middleware: 'login',
  components:{
    Login
  }
}
</script>

