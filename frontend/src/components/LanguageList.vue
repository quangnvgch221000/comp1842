<template>
    <table class="styled-table">
        <thead>
        <tr>
            <th>Word</th>
            <th>Level</th>
            <th>Language</th>
            <th>Edit</th>
        </tr>
        </thead>
    <tbody>
        <tr v-for="lang in languages" :key="lang._id">
            <td>{{ lang.name }}</td>
            <td>{{ lang.level }}</td>
            <td>{{ lang.language }} {{ countryToFlagEmoji(lang.language) }}</td>
            <td><button @click="deleteItem(lang._id)">Delete</button></td>
        </tr>
    </tbody>
    </table>
</template>
    
    <script setup>
    const props = defineProps(['languages'])
    const emit = defineEmits(['refresh'])
    
    const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/api/languages/${id}`, { method: 'DELETE' })
    emit('refresh')
}

  // Convert "Vietnam" -> 🇻🇳
function countryToFlagEmoji(country) {
    const code = country.trim().toUpperCase().slice(0, 2);
    const OFFSET = 127397;
    return code.length === 2
        ? String.fromCodePoint(...[...code].map(c => c.charCodeAt() + OFFSET))
        : '';
}
</script>
    