<template>
  <div
    class="relative flex w-screen min-w-[1440px] h-screen min-h-[720px] bg-white text-white"
  >
    <div class="w-full h-full flex justify-center items-center">
      <div
        class="w-[700px] h-[300px] flex flex-col justify-center items-center shadow-md text-white"
      >
        <input
          v-model="data.username"
          placeholder="Login"
          type="text"
          class="w-[50%] h-[40px] text-black border border-black outline-none focus:outline-none"
        />
        <input
          v-model="data.password"
          placeholder="Password"
          type="password"
          class="w-[50%] h-[40px] mt-[20px] text-black border border-black outline-none focus:outline-none"
        />
        <button
          @click="submitForm"
          class="w-[30%] h-[40px] mt-[20px] text-black border border-black"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script src="">
import { mapActions } from 'vuex'
// import { mapState } from "vuex";
export default {
  layout: 'login',
  data() {
    return {
      data: {
        username: '',
        password: '',
      },
    }
  },
  computed: {},
  methods: {
    ...mapActions('admin', ['takeToken']),
    async submitForm() {
      try {
        console.log('1')
        const res = await this.$auth
          .loginWith('local', {
            data: this.data,
          })
          .then((response) => {
            console.log('11')
            // console.log("LoginResponse", response);
            if (response.status === 200) {
              // console.log("LoginResponse", response);
              this.$router.push('admin')
              // console.log("response", response);
              this.$auth.setUserToken(this.$auth.strategy.token.get())

              this.takeToken({ Token: this.$auth.strategy.token.get() })
            }
          })
      } catch (e) {
        this.$router.push('/login')
      }
    },
  },
}
</script>
