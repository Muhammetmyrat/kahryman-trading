<template>
  <div class="main">
    <section class="login">
      <div class="login__body">
        <div class="login__logo">
          <img src="@/assets/client/img/header/logo/logo2.png" alt="" />
        </div>
        <form class="login__form">
          <div class="login__input">
            <label class="login__label">Login:</label>
            <input type="text" class="login__input-item" />
          </div>
          <div class="login__input">
            <label class="login__label">Password:</label>
            <input type="password" class="login__input-item" />
          </div>
          <button class="login__button">Log In</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'empty',
}
</script>

<style scoped>
.main {
  background: #f3f3f3;
}

.__container {
  max-width: 1430px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.login {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #f3f3f3;
}

.login__body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px 40px;
  width: 600px;
}

.login__logo {
  padding-bottom: 40px;
}

.login__form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
}

.login__input {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 40px;
}

.login__label {
  font-size: 22px;
  padding-bottom: 10px;
  font-weight: bold;
}

.login__input-item {
  font-size: 20px;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid #474747;
  padding: 10px;
}

.login__button {
  padding: 10px;
  background-color: #3f4a96;
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
}
</style>
