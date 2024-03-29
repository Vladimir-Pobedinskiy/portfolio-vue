<template>
  <template v-if="loading">
    <AppLoading :loading="loading" />
  </template>
  <div class="sign-up">
    <Form
      name="sign-up-form"
      action="#"
      method="POST"
      class="sign-up__form"
      :validation-schema="schema"
      @submit="onSubmit"
      v-slot="{ errors }"
    >
      <div class="sign-up__form-item">
        <div class="sign-up__form-label-wrap label-wrap" :class="{ 'error': errors.surname }">
          <label class="label">
            <Field v-model.trim="form.user.surname" class="label__input l-input" type="text" name="surname" placeholder=" " />
            <span class="label__input-title l-input">Фамилия</span>
            <span class="error-message marker">{{ errors.surname }}</span>
          </label>
        </div>
      </div>
      <div class="sign-up__form-item">
        <div class="sign-up__form-label-wrap label-wrap" :class="{ 'error': errors.name }">
          <label class="label">
            <Field v-model.trim="form.user.name" class="label__input l-input" type="text" name="name" placeholder=" " />
            <span class="label__input-title l-input">Имя</span>
            <span class="error-message marker">{{ errors.name }}</span>
          </label>
        </div>
      </div>
      <div class="sign-up__form-item">
        <div class="sign-up__form-label-wrap label-wrap" :class="{ 'error': errors.tel }">
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
            <span class="error-message marker">{{ errors.tel }}</span>
          </label>
        </div>
      </div>
      <div class="sign-up__form-item">
        <div class="sign-up__form-label-wrap label-wrap" :class="{ 'error': errors.email }">
          <label class="label">
            <Field v-model="form.user.email" class="label__input l-input" type="email" name="email" placeholder=" " />
            <span class="label__input-title l-input">Электронная почта</span>
            <span class="error-message marker">{{ errors.email }}</span>
          </label>
        </div>
      </div>
      <div class="sign-up__form-item">
        <div class="sign-up__form-label-wrap label-wrap" :class="{ 'error': errors.password }">
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
      <div class="sign-up__form-item">
        <div class="sign-up__form-label-wrap label-wrap" :class="{ 'error': errors.repeatPassword }">
          <label class="label">
            <Field
              v-model="form.user.repeatPassword"
              class="label__input l-input"
              type="password"
              name="repeatPassword"
              placeholder=" "
              autocomplete="off"
              :disabled="loading"
            />
            <span class="label__input-title l-input">Повторите пароль</span>
            <span class="error-message marker">{{ errors.repeatPassword }}</span>
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

      <UIButton btn-class="sign-up__btn-submit btn" type="submit" :disabled="loading">
        Зарегистрироваться
      </UIButton>
      <span class="sign-up__form-agreement p4">
        Нажимая кнопку «Зарегистрироваться», я соглашаюсь на обработку персональных данных
      </span>
      <div class="sign-up__sign-up-wrapper">
        <span class="sign-up__sign-up-title p3">Вы уже зарегистрированы?</span>
        <button class="sign-up__sign-up-btn" type="button" :disabled="loading" @click="$router.push('/login/')">
          Войдите
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
  name: 'AuthSignUpPhysical',
  components: { AppLoading, Form, Field },
  directives: {
    imask: IMaskDirective
  },
  data() {
    return {
      form: {
        user: {
          surname: '',
          name: '',
          tel: '',
          email: '',
          password: '',
          repeatPassword: ''
        }
      },
      schema: Yup.object().shape({
        surname: Yup.string().nullable(),
        name: Yup.string().required('Имя обязательно для заполнения'),
        tel: Yup.string().required('Телефон обязателен для заполнения').min(18, 'Неверный формат номера телефона'),
        email: Yup.string().required('Email обязателен для заполнения').email('Неверный формат электронной почты'),
        password: Yup.string().required('Пароль обязателен для заполнения').min(6, 'Пароль должен содержать минимум 6 символов'),
        repeatPassword: Yup.string().required('Повторный пароль обязателен для заполнения').min(6, 'Пароль должен содержать минимум 6 символов')
      })
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loading',
      user: 'user'
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
        // await axios.post('/api/registration/', { ...this.form })
        const { data, error } = await supabase.auth.signUp({
          email: this.form.user.email,
          password: this.form.user.password
        })
        if (error) throw error
        this.form.user.surname = ''
        this.form.user.name = ''
        this.form.user.tel = ''
        this.form.user.email = ''
        this.form.user.password = ''
        this.form.user.repeatPassword = ''
        actions.resetForm()
        this.setUser(data.user)
        this.$router.push({ name: 'PersonalAccountView' })
      } catch (error) {
        if (error.statusCode === 422) {
          actions.setErrors(error.data.errors)
        }
        actions.setErrors({ surname: ' ', name: ' ', tel: ' ', email: ' ', password: ' ', repeatPassword: `${error.name}` })
        console.error('Error fetching AuthSignUpPhysical:', error)
      } finally {
        this.endLoading()
      }
    }
  }
}
</script>
<style lang="scss">

.sign-up {

  &__btn-submit.btn {
    margin: 24px 0 12px;
    width: 100%;
  }

  &__form-agreement {
    display: inline-block;
    margin-bottom: 24px;
    color: $color-gray-medium;
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
    }
  }
}

</style>
