<template>
  <form action="#" name="login" method="POST" class="login__form" @submit.prevent="handleSubmit(onSubmit)">

    <div class="login__form-item">
      <div class="login__form-label-wrap label-wrap">
        <label class="label">
          <input v-model="form.user.tel" class="label__input l-input" type="tel" name="tel" placeholder="+7 ">
          <span class="label__input-title l-input">Телефон </span>
          <span v-if="errors" class="error-message marker">{{ errors }}</span>
        </label>
      </div>
    </div>
    <div class="login__form-item">
      <div class="login__form-label-wrap label-wrap">
        <label class="label">
          <button
            class="toggle-password-visibility-btn"
            data-show="false"
            type="button"
            tabindex="1"
            :disabled="loading"
            @click="togglePasswordVisibility"
          >
            <svg width="24px" height="24px">
              <use xlink:href="#icon-eye-input-password"></use>
            </svg>
            <svg width="24px" height="24px">
              <use xlink:href="#icon-eye-input-password-hidden"></use>
            </svg>
          </button>

          <input
            v-model="form.user.password"
            class="label__input l-input"
            type="password"
            name="password"
            placeholder=" "
            autocomplete="off"
            :disabled="loading"
          >
          <span class="label__input-title l-input">Пароль </span>
          <span v-if="errors" class="error-message marker">{{ errors }}</span>
        </label>
      </div>
    </div>

    <div class="login__password-recovery-btn-wrapper">
      <button class="login__password-recovery-btn p3" type="button" :disabled="loading" @click="$router.push('/password-recovery/')">
        Забыли пароль?
      </button>
    </div>
    <UIButton btn-class="login__btn-submit btn" type="submit" :disabled="loading">
      Войти
    </UIButton>
    <div class="login__sign-up-wrapper">
      <UILink link-class="login__sign-up-link" :link-url="{ name: 'RegistrationView' }">Зарегистрироваться</UILink>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { passwordVisibility } from '@/utils/utils'
export default {
  name: 'AuthLogin',
  data() {
    return {
      form: {
        user: {
          tel: '',
          password: ''
        }
      },
      errors: null
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loading'
    })
  },
  methods: {
    ...mapActions({
      startLoading: 'startLoading',
      endLoading: 'endLoading'
    }),
    togglePasswordVisibility(event) {
      passwordVisibility(event)
    },
    async onSubmit() {
      try {
        this.startLoading()
      } catch (error) {
        this.endLoading()
        console.error('Error fetching login:', error)
      }
    }
  }
}
</script>

<style lang="scss">
.login {

  &__password-recovery-btn-wrapper {
    margin-bottom: 24px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  &__password-recovery-btn {
    position: relative;
    background-color: transparent;
    transition: color 0.3s ease;
  }

  &__btn-submit.btn {
    margin-bottom: 16px;
    width: 100%;
  }

  &__sign-up-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__sign-up-title {
    display: inline-block;
    margin-right: 20px;
  }

  &__sign-up-link {
    background-color: transparent;
    transition: color 0.3s ease;
  }
}

.label {

  &__input-title {
    color: $color-gray-light;
  }
}

</style>
