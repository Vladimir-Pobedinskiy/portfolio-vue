<template>
  <template v-if="loading">
    <AppLoading :loading="loading" />
  </template>
  <div class="login">
    <Form ref="form" action="#" name="login" method="POST" class="login__form" @submit.prevent="onSubmit">
      <div class="login__form-item">
        <div class="login__form-label-wrap label-wrap">
          <label class="label">
            <Field
              v-model="form.user.tel"
              v-imask="{ mask: '+7 (000) 000-00-00' }"
              class="label__input l-input"
              type="tel"
              name="tel"
              placeholder="+7 "
            />
            <span class="label__input-title l-input">Телефон </span>
            <span v-if="errors" class="error-message marker">{{ errors }}</span>
          </label>
        </div>
      </div>
      <div class="login__form-item">
        <div class="login__form-label-wrap label-wrap">
          <label class="label">
            <Field
              v-model="form.user.password"
              class="label__input l-input"
              type="password"
              name="password"
              placeholder=" "
              autocomplete="off"
              :disabled="loading"
            />
            <span class="label__input-title l-input">Пароль </span>
            <span v-if="errors" class="error-message marker">{{ errors }}</span>
          </label>
          <button
              class="toggle-password-visibility-btn"
              data-show="false"
              type="button"
              tabindex="1"
              :disabled="loading"
              @click="togglePasswordVisibility"
            >
            <UIIcon icon-name="icon:icon-eye-input-password-hidden" class-name="icon-eye-password-hidden" width="24px" height="24px" fill="none" />
            <UIIcon icon-name="icon:icon-eye-input-password" class-name="icon-eye-password" width="24px" height="24px" />
          </button>
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
        <button class="login__sign-up-btn" type="button" :disabled="loading" @click="$router.push('/registration/')">
          Зарегистрироваться
        </button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field } from 'vee-validate'
import { passwordVisibility } from '@/utils/utils'
import { IMaskDirective } from 'vue-imask'
import { mapGetters, mapActions } from 'vuex'
import AppLoading from '@/components/App/AppLoading'
import axios from 'axios'

export default {
  name: 'AuthLogin',
  components: { AppLoading, Form, Field },
  directives: {
    imask: IMaskDirective // Регистрируем директиву IMaskDirective - это директива, предоставляемая библиотекой vue-imask
  },
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
        await axios.post('/api/login/', { ...this.form })
        this.form.user.tel = ''
        this.form.user.password = ''
        this.$refs.form.reset()
        this.endLoading()
      } catch (error) {
        this.endLoading()
        console.error('Error fetching AuthLogin:', error)
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

  &__sign-up-btn {
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
