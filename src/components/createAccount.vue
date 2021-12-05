<template>
  <div v-if="step ===`createAccount`">
    <div class="main">
      <div class="main_text">
        <div class="main_text-first1">
          <h5 class="h51">{{ $t('create_title1')}}</h5>
        </div>
        <div class="main_text-second">
          <p>{{ $t ('create_title2')}}</p>
        </div>

      </div>
      <div class="main_inputs">
        <div class="main_inputs">
          <div class="main_inputs-text">
            <p class="p1">{{ $t ('name')}}</p>
          </div>
          <div class="main_inputs-text">
            <input v-model="userInputsModel.userEmail" type="text" :placeholder="$t ('name')">
          </div>
          <div class="error" v-for="(error,idx) in fieldError.userEmail" :key="idx">
            {{error}}
          </div>

        </div>

        <div class="main_inputs">
          <div class="main_inputs-text">
            <p class="p1">{{ $t ('password')}}</p>
          </div>
          <div class="main_inputs-text">
            <input v-model="userInputsModel.password" type="password" :placeholder=" $t ('input_password')">
          </div>
          <div class="error" v-for="(error,idx) in fieldError.password" :key="idx">
            {{error}}
          </div>
        </div>
        <div class="main_inputs">
          <div class="main_inputs-text">
            <p class="p1">{{ $t ('confirm_password')}}</p>
          </div>
          <div class="main_inputs-text">
            <input v-model="userInputsModel.confirmPassword" type="password" :placeholder="$t ('confirm_password')">
          </div>
          <div class="error" v-for="(error,idx) in fieldError.confirmPassword" :key="idx">
            {{error}}
          </div>
        </div>
      </div>
      <div class="signGoogle1">
        <span><img src="../assets/google.svg" alt=""></span>
        <span><a href="https://www.google.com/">{{ $t ('sign_google')}}</a></span>
      </div>
      <div class="btn-block">
        <div class="div-nextSlide1">
          <button class="btn-nextSlide1" @click="register">{{ $t ('create_btn')}}</button>
        </div>
        <div class="div-skipSlide">
          <router-link to="/login" class="btn-skip">{{ $t ('sign_btn')}}</router-link>
        </div>
      </div>
      <div class="btn-language">
        <button class="language" @click="setLocale('en-EN')">EN</button>
        <button class="language" @click="setLocale('ru-RU')">RU</button>
      </div>

    </div>
  </div>
  <div v-if="step === `main`">
    <mainPage/>
  </div>
</template>

<script>
  import {defineComponent} from "vue";
  import validate from 'validate.js'

  import validateModels from '../utils/index'
  import mainPage from '../components/mainPage'

  export default {
    name: "createAccount",
    components: {
      mainPage
    },
    mounted() {
      // this.$i18n.locale = 'en-EN'

    },
    data() {
      return {
        userInputsModel: {
          userEmail: '',
          password: '',
          confirmPassword: ''
        },
        registerValidateModel: {
          userEmail: validateModels.userEmail,
          password: validateModels.password,
          confirmPassword: validateModels.confirmPassword
        },
        step: 'createAccount',
        fieldError: {}
      }
    },
    methods: {
      setLocale(lang) {
        this.$i18n.locale = lang
        localStorage.setItem('lang', lang)

      },
      register() {
        const modelInputs = {
          userEmail: this.userInputsModel.userEmail,
          password: this.userInputsModel.password,
          confirmPassword: this.userInputsModel.confirmPassword
        }
        console.log(modelInputs)
        if (validate(modelInputs, this.registerValidateModel)) {
          this.fieldError = validate(modelInputs, this.registerValidateModel, {fullMessages: false}
          )
        } else {

          this.step = 'main'
          localStorage.setItem('userEmail', this.userInputsModel.userEmail)
          localStorage.setItem('password', this.userInputsModel.password)
          localStorage.setItem('password', this.userInputsModel.confirmPassword)
          console.log(localStorage)

        }


      }
    },


  }
</script>

<style scoped>

</style>
