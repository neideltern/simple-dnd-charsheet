import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('character', () => {
    const proficiencyBonus = ref(2)

    const abilities = {
        str: {
            name: 'Strength',
            icon: '✊',
            score: ref(0)
        },
        con: {
            name: 'Constitution',
            icon: '💪',
            score: ref(0)
        },
        dex: {
            name: 'Dexterity',
            icon: '✋',
            score: ref(0)
        },
        int: {
            name: 'Intelligence',
            icon: '🧠',
            score: ref(0)
        },
        wis: {
            name: 'Wisdom',
            icon: '📖',
            score: ref(0)
        },
        cha: {
            name: 'Charisma',
            icon: '🎭',
            score: ref(0)
        }
    }

    const savings = {
        str: {
            proficiency: ref(0),
            ability: abilities.str
        },
        con: {
            proficiency: ref(0),
            ability: abilities.con
        },
        dex: {
            proficiency: ref(0),
            ability: abilities.dex
        },
        int: {
            proficiency: ref(0),
            ability: abilities.int
        },
        wis: {
            proficiency: ref(0),
            ability: abilities.wis
        },
        cha: {
            proficiency: ref(0),
            ability: abilities.cha
        }
    }

    const skills = {
        ath: {
            name: 'Athletics',
            proficiency: ref(0),
            ability: abilities.str
        },
        acr: {
            name: 'Acrobatics',
            proficiency: ref(0),
            ability: abilities.dex
        },
        soh: {
            name: 'Sleight of hand',
            proficiency: ref(0),
            ability: abilities.dex
        },
        ste: {
            name: 'Stealth',
            proficiency: ref(0),
            ability: abilities.dex
        },
        arc: {
            name: 'Arcana',
            proficiency: ref(0),
            ability: abilities.int
        },
        his: {
            name: 'History',
            proficiency: ref(0),
            ability: abilities.int
        },
        inv: {
            name: 'Investigation',
            proficiency: ref(0),
            ability: abilities.int
        },
        nat: {
            name: 'Nature',
            proficiency: ref(0),
            ability: abilities.int
        },
        rel: {
            name: 'Religion',
            proficiency: ref(0),
            ability: abilities.int
        },
        anh: {
            name: 'Animal Handling',
            proficiency: ref(0),
            ability: abilities.wis
        },
        ins: {
            name: 'Insight',
            proficiency: ref(0),
            ability: abilities.wis
        },
        med: {
            name: 'Medicine',
            proficiency: ref(0),
            ability: abilities.wis
        },
        prc: {
            name: 'Perception',
            proficiency: ref(0),
            ability: abilities.wis
        },
        sur: {
            name: 'Survival',
            proficiency: ref(0),
            ability: abilities.wis
        },
        dec: {
            name: 'Deception',
            proficiency: ref(0),
            ability: abilities.cha
        },
        int: {
            name: 'Intimidation',
            proficiency: ref(0),
            ability: abilities.cha
        },
        prf: {
            name: 'Performance',
            proficiency: ref(0),
            ability: abilities.cha
        },
        prs: {
            name: 'Persuasion',
            proficiency: ref(0),
            ability: abilities.cha
        }
    }

    function getModifier(score) {
        let modifier = (score - 10) / 2
        return Math.floor(modifier)
    }

    return {
        abilities,
        savings,
        skills,
        proficiencyBonus,
        getModifier
    }
})
