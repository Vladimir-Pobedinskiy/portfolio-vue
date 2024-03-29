<template>
  <template v-if="loading">
    <AppLoading :loading="loading" />
  </template>
  <div class="login">
    <Form
      name="login"
      action="#"
      method="POST"
      class="login__form"
      :validation-schema="schema"
      @submit="onSubmit"
      v-slot="{ errors }"
    >
      <div class="sign-up__form-item">
        <div class="sign-up__form-label-wrap label-wrap" :class="{ 'error': errors.email }">
          <label class="label">
            <Field v-model="form.user.email" class="label__input l-input" type="email" name="email" placeholder=" " />
            <span class="label__input-title l-input">Электронная почта</span>
            <span class="error-message marker">{{ errors.email }}</span>
          </label>
        </div>
      </div>
      <div class="login__form-item">
        <div class="login__form-label-wrap label-wrap" :class="{ 'error': errors.password }">
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
            <span class="label__input-title l-input">Пароль</span>
            <span class="error-message marker">{{ errors.password }}</span>
          </label>
          <button
            class="toggle-password-visibility-btn"
            data-show="false"
            type="button"
            tabindex="1"
            :disabled="loading"
            @click="togglePasswordVisibility"
          >
            <UIIcon icon-name="icon:icon-eye-input-password-hidden" class-name="icon-eye-password-hidden" width="24px" height="24px" />
            <UIIcon icon-name="icon:icon-eye-input-password" class-name="icon-eye-password" width="24px" height="24px" />
          </button>
        </div>
      </div>

      <div class="login__password-recovery-btn-wrapper">
        <button class="login__password-recovery-btn p3" type="button" :disabled="loading" @click="$router.push('/password-recovery/')">
          Забыли пароль?
        </button>
      </div>
      <UIButton btn-class="login__btn-submit btn" type="submit" :disabled="loading" >
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
import * as Yup from 'yup'
import { passwordVisibility } from '@/utils/utils'
import { IMaskDirective } from 'vue-imask'
import { mapGetters, mapActions } from 'vuex'
import AppLoading from '@/components/App/AppLoading'
// import axios from 'axios'
import { supabase } from '@/supabase'

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
          email: '',
          password: ''
        }
      },
      schema: Yup.object().shape({
        email: Yup.string().required('Email обязателен для заполнения').email('Неверный формат электронной почты'),
        password: Yup.string().required('Пароль обязателен для заполнения').min(6, 'Неверный пароль')
      })
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
      endLoading: 'endLoading',
      setUser: 'setUser'
    }),
    togglePasswordVisibility(event) {
      passwordVisibility(event)
    },
    async onSubmit(values, actions) {
      try {
        this.startLoading()
        // await axios.post('/api/login/', { ...this.form })
        const { data, error } = await supabase.auth.signInWithPassword({
          email: this.form.user.email,
          password: this.form.user.password
        })
        if (error) throw error
        this.form.user.email = ''
        this.form.user.password = ''
        actions.resetForm()
        this.setUser(data.user)
        this.$router.push({ name: 'PersonalAccountView' })
      } catch (error) {
        if (error.statusCode === 422) {
          actions.setErrors(error.data.errors)
        }
        actions.setErrors({ email: ' ', password: `${error.name}` })
        console.error('Error fetching AuthLogin:', error)
      } finally {
        this.endLoading()
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

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 102%;
      width: 100%;
      height: 1px;
      background-color: $color-gray-dark;
    }
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
    position: relative;
    background-color: transparent;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 103%;
      width: 100%;
      height: 1px;
      background-color: $color-gray-dark;
      transition: all 0.3s ease;
    }
  }
}

.label {

  &__input-title {
    color: $color-gray-light;
  }
}

</style>
