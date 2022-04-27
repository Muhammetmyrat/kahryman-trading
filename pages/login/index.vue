<template>
  <div
    class="relative flex w-screen min-w-[1440px] h-screen min-h-[720px] bg-gradient-to-tr from-rose-900 to-sky-500 text-white"
  >
    <div class="w-full h-full flex justify-center items-center">
      <div
        class="w-[700px] h-[300px] flex flex-col justify-center items-center shadow-md text-white"
      >
        <input
          v-model="data.username"
          placeholder="Login"
          type="text"
          class="w-[50%] h-[40px] bg-gradient-to-tr from-rose-900 to-sky-500 text-white outline-none focus:outline-none"
        />
        <input
          v-model="data.password"
          placeholder="Password"
          type="password"
          class="w-[50%] h-[40px] mt-[20px] bg-gradient-to-tr from-rose-900 to-sky-500 text-white outline-none focus:outline-none"
        />
        <button
          @click.prevent="submitForm"
          class="w-[30%] h-[40px] mt-[20px] bg-gradient-to-tr from-rose-900 to-sky-500 text-white"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script src="">
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
    async submitForm() {
      try {
        const res = await this.$auth
          .loginWith('local', {
            data: this.data,
          })
          .then((response) => {
            // console.log("LoginResponse", response);
            if (response.status === 200) {
              console.log('LoginResponse', response)
              this.$auth.setUserToken(response.data.token)
              console.log(
                'this.$auth.strategy.token',
                this.$auth.strategy.token.set(response.data.token)
              )

              this.$auth.strategy.token.set(response.data.token)
              this.$auth.strategy.token.sync()
              console.log(
                'this.$auth.strategy.token.status()',
                this.$auth.strategy.token.status()
              )
              // this.$auth.strategy.token.set(response.data.token);
            }
          })
          .catch((Error) => {
            console.log('ErrorToken', Error)
          })
          .then(() => {
            this.$router.push('/admin')
          })
      } catch (e) {
        this.$router.push('/login')
      }
    },
  },
}
</script>
