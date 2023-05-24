<template>
  <div class="game-wrapper">
    <div v-if="questions && questions.length" class="game-container">
      <MoleculesGameState :current-question-index="currentQuestionIndex" :points="points" />
      <OrganismsQuizQuestion @on-answer="onAnswer" :question="questions[currentQuestionIndex]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {QuizData} from "~/definitions/QuizData";
import {QuizQuestion} from "~/definitions/QuizQuestion";

const url = 'https://opentdb.com/api.php?amount=4&difficulty=medium&type=multiple';
const {data: quizData} = await useFetch<QuizData>(url);


const questions : QuizQuestion[] = quizData.value?.results || [];

const currentQuestionIndex = ref(0);
const points = 0;

const onAnswer = (answer: string) => {
  console.log(answer);
}

</script>

<style scoped>
.game-container {
  @apply flex flex-col;
}
</style>
