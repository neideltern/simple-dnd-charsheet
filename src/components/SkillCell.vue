<script setup>
import { useCharacterStore } from '@/stores/character'
const character = useCharacterStore()

function getSkillModifier(score, proficiency, bonus){
    let modifier = character.getModifier(score)

    if (proficiency === 1) 
        modifier += bonus
    else if (proficiency === 2)
        modifier += bonus * 2

    return modifier
}
</script>

<template>
    <div v-for="(skill, index) in character.skills" :key="index" class="skill">
        <div class="title">
            <h1>{{ skill.name }}</h1>
            <h1>{{ skill.ability.icon }}</h1>
        </div>
        <p>
            Modifier:
            {{
                getSkillModifier(
                    skill.ability.score,
                    skill.proficiency,
                    proficiencyBonus
                )
            }}
        </p>
    </div>
</template>

<style lang="stylus" scoped>
.skill
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
