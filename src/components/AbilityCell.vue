<script setup>
import { useCharacterStore } from '@/stores/character'
const character = useCharacterStore()
</script>

<template>
    <div v-for="(ability, index) in character.abilities" :key="index" class="ability">
        <div class="title">
            <h1>{{ ability.name }}</h1>
            <h1>{{ ability.icon }}</h1>
        </div>
        <input v-model="ability.score" type="number" />
        <p>Modifier: {{ character.getModifier(ability.score) }}</p>
    </div>
</template>

<style lang="stylus" scoped>
.ability
    height 120px
    border 1px solid black
    display flex
    flex-direction column
    justify-content space-between

p
    margin 0

.title
    display flex
    flex-direction row

    h1
        margin 0
</style>
