<template>
  <template v-if="loading">
    <AppLoading :loading="loading" />
  </template>
  <div class="sign-up">
    <form ref="form" action="#" name="sign-up-form" method="POST" class="sign-up__form" @submit.prevent="onSubmit">
      <div class="sign-up__form-item">
        <div class="sign-up__form-label-wrap label-wrap">
          <label class="label">
            <input v-model="form.user.surname" class="label__input l-input" type="text" name="surname" placeholder=" ">
            <span class="label__input-title l-input">Фамилия</span>
            <span v-if="errors" class="error-message marker">{{ errors }}</span>
          </label>
        </div>
      </div>
      <div class="sign-up__form-item">
        <div class="sign-up__form-label-wrap label-wrap">
          <label class="label">
            <input v-model="form.user.name" class="label__input l-input" type="text" name="name" placeholder=" ">
            <span class="label__input-title l-input">Имя</span>
            <span v-if="errors" class="error-message marker">{{ errors }}</span>
          </label>
        </div>
      </div>
      <div class="sign-up__form-item">
        <div class="sign-up__form-label-wrap label-wrap">
          <label class="label">
            <input
              v-model="form.user.tel"
              v-imask="{ mask: '+7 (000) 000-00-00' }"
              class="label__input l-input"
              type="tel"
              name="tel"
              placeholder="+7 "
            >
            <span class="label__input-title l-input">Телефон </span>
            <span v-if="errors" class="error-message marker">{{ errors }}</span>
          </label>
        </div>
      </div>
      <div class="sign-up__form-item">
        <div class="sign-up__form-label-wrap label-wrap">
          <label class="label">
            <input v-model="form.user.email" class="label__input l-input" type="email" name="email" placeholder=" ">
            <span class="label__input-title l-input">Электронная почта</span>
            <span v-if="errors" class="error-message marker">{{ errors }}</span>
          </label>
        </div>
      </div>
      <div class="sign-up__form-item">
        <div class="sign-up__form-label-wrap label-wrap">
          <label class="label">
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
        </div>
      </div>
      <div class="sign-up__form-item">
        <div class="sign-up__form-label-wrap label-wrap">
          <label class="label">
            <input
              v-model="form.user.repeatPassword"
              class="label__input l-input"
              type="password"
              name="repeatPassword"
              placeholder=" "
              autocomplete="off"
              :disabled="loading"
            >
            <span class="label__input-title l-input">Повторите пароль</span>
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
              <svg width="24px" height="24px">
                <use xlink:href="#icon-eye-input-password"></use>
              </svg>
              <svg width="24px" height="24px">
                <use xlink:href="#icon-eye-input-password-hidden"></use>
              </svg>
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
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppLoading from '@/components/App/AppLoading'
import { passwordVisibility } from '@/utils/utils'
import { IMaskDirective } from 'vue-imask'
import axios from 'axios'

export default {
  name: 'AuthSignUpPhysical',
  components: { AppLoading },
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
      errors: null
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loading'
    })
  },
  directives: {
    // Регистрируем директиву IMaskDirective - это директива, предоставляемая библиотекой vue-imask
    imask: IMaskDirective
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
        await axios.post('/api/registration/', { ...this.form })
        this.form.user.surname = ''
        this.form.user.name = ''
        this.form.user.tel = ''
        this.form.user.email = ''
        this.form.user.password = ''
        this.form.user.repeatPassword = ''
        this.$refs.form.reset()
        this.endLoading()
      } catch (error) {
        this.endLoading()
        console.error('Error fetching AuthSignUpPhysical:', error)
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
      transition: all 0.3s ease;
    }
  }
}

</style>
