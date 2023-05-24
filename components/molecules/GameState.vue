<template>
  <div class="flex justify-between">
    <p>{{props.currentQuestionIndex}}/4</p>
    <p class="second-state">{{props.currentQuestionIndex}}/4</p>
    <p>{{props.points}} points</p>
  </div>
</template>

<script setup lang="ts">
type Props = {
  points: number;
  currentQuestionIndex: number;
};

const props = defineProps<Props>();
</script>
