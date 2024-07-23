<script setup>
import { useCharacterStore } from '@/stores/character'
const character = useCharacterStore()

function getSavingModifier(score, proficiency, bonus) {
    let modifier = character.getModifier(score)

    if (proficiency == true) modifier += bonus

    return modifier
}
</script>

<template>
    <div v-for="(saving, index) in character.savings" :key="index" class="saving">
        <div class="title">
            <h1>{{ saving.ability.name }}</h1>
            <h1>{{ saving.ability.icon }}</h1>
        </div>
        <p>
            Modifier:
            {{ getSavingModifier(saving.ability.score, saving.proficiency, proficiencyBonus) }}
        </p>
    </div>
</template>

<style lang="stylus" scoped>
.saving
    height 40px
    border 1px solid black
    display flex
    flex-direction row

    .title
        display flex
        flex-direction row

        h1
            margin 0
</style>
