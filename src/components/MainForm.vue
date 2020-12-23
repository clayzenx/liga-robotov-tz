<template>
  <div>
    <a-form-model :model='form' :rules="rules" ref='rules' class='main-form' :class="$mq">
      <h4 style="color: #ccc; margin-bottom: 25px;">
        Проверка доступности региона/города: 
      </h4>
      <a-form-model-item ref="name" prop="name">
        <a-input v-model="form.name" placeholder="ФИО">
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item ref="phone" prop="phone">
        <a-input v-model="form.phone" placeholder='Номер телефона'>
          <a-icon slot="prefix" type="phone" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item ref="email" prop="email">
      <a-input v-model="form.email" placeholder="Email">
        <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item ref="country" prop="country">
      <a-select v-if="countries" @change="changeSelectedCountry" v-model="form.country" style='width: 190px;'>
        <a-select-option v-for="country in countries" :key="country.name">
          <a-icon slot="prefix" type="environment" style="color:rgba(0,0,0,.25)" />
          {{ country.name }}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item ref="region" prop="region" v-if="form.country !== 'Страна'">
      <a-select @change="changeSelectedRegion" placeholder="Регион" style="width: 190px" v-model="form.region">
        <a-select-option v-for="region in selectedCountry.areas" :key="region.name">
          <a-icon slot="prefix" type="compass" style="color:rgba(0,0,0,.25)" />
          {{region.name}}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item ref="city" prop="city" v-if="form.region !== 'Регион' && selectedRegion.areas.length > 0">
      <a-select placeholder="Город" style="width: 190px" v-model="form.city">
        <a-select-option v-for="city in selectedRegion.areas" :key="city.name">
          <a-icon slot="prefix" type="bank" style="color:rgba(0,0,0,.25)" />
          {{city.name}}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item>
      <a-button type="default" @click="onSubmit">
        Отправить
      </a-button>
    </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import formValidator from  '../assets/js/form-validator';   // Необходимый для валидации полей объект
import submitForm from '../assets/js/submitForm'            // Функция отпраки формы
import { mapActions, mapGetters } from 'vuex'

  export default {
    data() {
      return {
        selectedCountry: null,
        selectedRegion: null,
        form: { name: '', phone: '', email: '', country: 'Страна', region: 'Регион', city: 'Город'},
        rules: formValidator
      }
    },
    computed: { ...mapGetters(['countries']), },             // countries - массив городов из API
    methods: { 
      ...mapActions(['fetchCountries']),                     // Метод оправки запроса на получения городов
      changeSelectedCountry(selectedCountryName){
        this.selectedCountry = this.countries.find(country => country.name === selectedCountryName)
        this.form.region = 'Регион'
      },
      changeSelectedRegion(selectedRegionName){
        this.selectedRegion = this.selectedCountry.areas.find(region => region.name === selectedRegionName)
        this.form.city = 'Город'
      },
      onSubmit() {
        this.$refs.rules.validate(valid => valid? submitForm(this.form) : false)      // Если форма прошла валидацию - отправляем
      },
    },
    created(){ this.fetchCountries(); }                                               // Запрашиваем данные при создании компонента
  }
</script>

<style lang="less" scoped>
@import '../assets/styles/main-form.less';                                           //Стили для формы
</style>