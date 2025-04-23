<template>
    <form @submit.prevent="submitForm" class="form">
        <input v-model="form.name" placeholder="Name" />
        <input v-model="form.level" placeholder="Level" />
        <input v-model="form.language" placeholder="Language" />
        <button>Add</button>
    </form>
</template>

    <script setup>
    import { ref } from 'vue'
    const emit = defineEmits(['refresh'])
    const form = ref({ name: '', level: '', language: '' })
    
    const submitForm = async () => {
    await fetch('http://localhost:5000/api/languages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form.value)
    })
    form.value = { name: '', level: '', language: '' }
    emit('refresh')
}
</script>
