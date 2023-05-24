import {QuizQuestion} from "~/definitions/QuizQuestion";

export interface QuizData {
    response_code: number;
    results: QuizQuestion[];
}
