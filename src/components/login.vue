<template>
<div v-if="step ===`login`" class="main">
  <div class="main_text">
    <div class="main_text-first">
      <h5>{{ $t('login_title1')}}</h5>
    </div>
    <div class="main_text-second">
      <p>{{ $t ('login_title2')}}</p>
    </div>

  </div>
  <div class="main_inputs">
    <div class="main_inputs">
      <div class="main_inputs-text">
        <p>{{ $t ('email')}}</p>
      </div>
      <div class="main_inputs-text">
        <input
          v-model="userInputsModel.userEmail"
           type="text"
          :placeholder="$t('input_email')">
      </div>
      <div class="error" v-for="(error,idx) in fieldError.userEmail" :key="idx">
        {{error}}
      </div>
    </div>
    <div class="main_inputs">
      <div class="main_inputs-text">
        <p>{{ $t ('password')}}</p>
      </div>
      <div class="main_inputs-text">
        <input type="password" v-model="userInputsModel.password" :placeholder="$t ('input_password')">
      </div>
      <div class="error" v-for="(error,idx) in fieldError.password" :key="idx">
        {{error}}
      </div>
    </div>
  </div>
  <div class="signGoogle">
    <span><img src="../assets/google.svg" alt=""></span>
    <span><a href="https://www.google.com/">{{ $t ('sign_google')}}</a></span>
  </div>
  <div class="btn-block">
    <div class="div-nextSlide">
      <button class="btn-nextSlide" type="submit" @click="signUp">{{ $t ('sign_btn')}}</button>
    </div>
    <div class="div-skipSlide">
      <router-link to="/createAccount"  class="btn-skip">{{ $t ('create_btn')}}</router-link>
    </div>
  </div>
  <div class="btn-language">
    <button class="language" @click="setLocale('en-EN')">EN</button>
    <button class="language" @click="setLocale('ru-RU')">RU</button>
  </div>


</div>
  <div  v-if="step === `main`" >
    <mainPage/>
  </div>
</template>

<script>

import  validate from 'validate.js'
import validateModels from '../utils/index'
import mainPage from "./mainPage";


export default {
  name: "login",
  components: {
    mainPage
  },

  data ()  {
    return {
      userInputsModel: {
        userEmail: '',
        password: '',
      },
      registerValidateModel: {
        userEmail: validateModels.userEmail,
        password:validateModels.password,
      },
      step: 'login',
      fieldError:{}
    }

  },




  mounted() {
    // this.$i18n.locale = 'en-EN'

  },
  methods: {
    setLocale (lang) {
      this.$i18n.locale = lang
      localStorage.setItem('lang', lang)

    },
    signUp () {
      const modelInputs = {
        userEmail: this.userInputsModel.userEmail,
        password: this.userInputsModel.password,
      }
      console.log(modelInputs)
      if (validate(modelInputs, this.registerValidateModel)){
        this.fieldError = validate(modelInputs, this.registerValidateModel, {fullMessages: false}
        )
      }
      else  {
        this.step = 'main',
          localStorage.setItem('userEmail', this.userInputsModel.userEmail)
        localStorage.setItem('password', this.userInputsModel.password)
        console.log(localStorage)
      }



    }


  },
}
</script>

<style scoped>

</style>
