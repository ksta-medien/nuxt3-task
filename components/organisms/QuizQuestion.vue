<template>
  <div class="w-[500px] min-h-[500px]">
    <p>{{props.question.category}}</p>
    <p>{{props.question.question}}</p>
    <p @click="onAnswer(props.question.correct_answer)">{{props.question.correct_answer}}</p>
    <p @click="onAnswer(props.question.incorrect_answers[0])">{{props.question.incorrect_answers[0]}}</p>
    <p @click="onAnswer(props.question.incorrect_answers[1])">{{props.question.incorrect_answers[1]}}</p>
    <p @click="onAnswer(props.question.incorrect_answers[2])">{{props.question.incorrect_answers[2]}}</p>
  </div>
</template>

<script setup lang="ts">
import {QuizQuestion} from "~/definitions/QuizQuestion";

type Props = {
  question: QuizQuestion;
};

const props = defineProps<Props>();

const emit = defineEmits(['onAnswer'])

const onAnswer = (answer: string) => {
  emit('onAnswer', answer);
}
</script>

<style scoped>

</style>
