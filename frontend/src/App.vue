<template>
  <div class="container">
    <h1>🌐 Language Manager</h1>
    <LanguageForm @refresh="fetchLanguages" />
    <LanguageList :languages="languages" @refresh="fetchLanguages" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LanguageForm from './components/LanguageForm.vue'
import LanguageList from './components/LanguageList.vue'
import './style.css'

const languages = ref([])
const fetchLanguages = async () => {
  const res = await fetch('http://localhost:5000/api/languages')
  languages.value = await res.json()
}
onMounted(fetchLanguages)
</script>
