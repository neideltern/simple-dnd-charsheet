<script setup>
import AbilityCell from '@/components/AbilityCell.vue'
import SavingCell from '@/components/SavingCell.vue'
import SkillCell from '@/components/SkillCell.vue'
</script>

<template>
    <div class="grid">
        <AbilityCell />
    </div>
    <div class="grid">
        <SavingCell />
    </div>
    <div class="grid">
        <SkillCell />
    </div>

</template>

<style lang="stylus" scoped>
.grid
    display grid
    grid-template-columns repeat(3, 1fr)
    gap: 24px
</style>
