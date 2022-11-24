<script>

import UserService from '../../services/user.service';

export default {
  data() {
    return {
      user: {
        full_name: "",
        email: "",
        address: "",
        account: {
          phone: "",
          password: ""
        }
      },
    }
  },
  methods: {
    async onSubmitRegister(data) {
      const result = await UserService.createUser(data);
      console.log(result)
      this.$router.push("/login")
    }
  }
}
</script>
<template>
  <div class="container-xxl py-5">
    <section class="login-registration-wrapper pt-50 pb-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-10">
            <div class="login-registration-style-3 mt-50">
              <h4 class="heading-4 font-weight-500 title">
                Login to your account
              </h4>
              <p class="paragraph-small font-weight-300 mt-15">
                Login to your account for a faster checkout.
              </p>
              <div class="row">
                <div class="col-md-7">
                  <form method="post" @submit.prevent="onSubmitRegister(this.user)">
                    <div class="single-form form-default">
                      <label>Họ tên</label>
                      <div class="form-input">
                        <input name="full_name" v-model="this.user.full_name" required type="text"
                          placeholder="Họ tên" />
                        <i class="fa-solid fa-envelope fs-6 mt-3"></i>
                      </div>
                    </div>
                    <div class="single-form form-default">
                      <label>Số điện thoại</label>
                      <div class="form-input">
                        <input name="phone" v-model="this.user.account.phone" required type="text"
                          placeholder="Số điện thoại" />
                        <i class="fa-solid fa-envelope fs-6 mt-3"></i>
                      </div>
                    </div>
                    <div class="single-form form-default">
                      <label>Địa chỉ</label>
                      <div class="form-input">
                        <input name="address" v-model="this.user.address" required type="text" placeholder="Địa chỉ" />
                        <i class="fa-solid fa-envelope fs-6 mt-3"></i>
                      </div>
                    </div>
                    <div class="single-form form-default">
                      <label>Email</label>
                      <div class="form-input">
                        <input name="email" required v-model="this.user.email" type="text" placeholder="Email" />
                        <i class="fa-solid fa-envelope fs-6 mt-3"></i>
                      </div>
                    </div>
                    <div class="single-form form-default">
                      <label>Password</label>
                      <div class="form-input">
                        <input name="password" id="password-11" v-model="this.user.account.password" required
                          type="password" placeholder="Password" />
                        <i class="fa-solid fa-lock fs-6 mt-3"></i>
                      </div>
                    </div>
                    <a class="forget" href="#0">Forget Password?</a>
                    <div class="single-form">
                      <button class="main-btn primary-btn" type="submit">Register</button>
                    </div>

                  </form>
                </div>
                <div class="col-md-5 text-center">
                  <p class="account ">Login with Social Account</p>
                  <ul>
                    <li class="facebook">
                      <a href="/">
                        <i class="fa-brands fa-facebook fs-5"></i>
                        <span>Login with Facebook</span>
                      </a>
                    </li>
                    <li class="google">
                      <a href="/"><i class="fa-brands fa-google fs-5"></i>
                        <span>Login with Google</span></a>
                    </li>
                  </ul>
                  <p class="login">
                    Haven’t an account? <a href="#0">Sign up</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
.facebook,
.google {
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.facebook {
  background-color: #2851A3;

  i,
  span {
    color: white;
  }
}

.google i {
  color: var(--danger-color);
}
</style>