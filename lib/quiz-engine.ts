import type { Question } from "./questions"

export interface QuizAnswer {
  questionId: string
  selectedAnswer: "A" | "B" | "C" | "D"
  isCorrect: boolean
}

export interface QuizState {
  questions: Question[]
  currentPage: number
  questionsPerPage: number
  answers: QuizAnswer[]
  isCompleted: boolean
  startTime: number
}

export interface ShuffledQuestion extends Omit<Question, "options"> {
  options: {
    A: string
    B: string
    C: string
    D: string
  }
  originalCorrectAnswer: "A" | "B" | "C" | "D"
  shuffledCorrectAnswer: "A" | "B" | "C" | "D"
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Shuffle question options and update correct answer accordingly
export function shuffleQuestionOptions(question: Question): ShuffledQuestion {
  const options = [
    { key: "A" as const, value: question.options.A },
    { key: "B" as const, value: question.options.B },
    { key: "C" as const, value: question.options.C },
    { key: "D" as const, value: question.options.D },
  ]

  const shuffledOptions = shuffleArray(options)

  // Find where the original correct answer ended up
  const originalCorrectValue = question.options[question.correctAnswer]
  const newCorrectIndex = shuffledOptions.findIndex((opt) => opt.value === originalCorrectValue)
  const newCorrectAnswer = ["A", "B", "C", "D"][newCorrectIndex] as "A" | "B" | "C" | "D"

  return {
    ...question,
    options: {
      A: shuffledOptions[0].value,
      B: shuffledOptions[1].value,
      C: shuffledOptions[2].value,
      D: shuffledOptions[3].value,
    },
    originalCorrectAnswer: question.correctAnswer,
    shuffledCorrectAnswer: newCorrectAnswer,
  }
}

export function initializeQuiz(questions: Question[], questionsPerPage = 10): QuizState {
  // Shuffle questions
  const shuffledQuestions = shuffleArray(questions)

  // Shuffle options for each question
  const questionsWithShuffledOptions = shuffledQuestions.map(shuffleQuestionOptions)

  return {
    questions: questionsWithShuffledOptions,
    currentPage: 0,
    questionsPerPage,
    answers: [],
    isCompleted: false,
    startTime: Date.now(),
  }
}

export function getCurrentPageQuestions(quizState: QuizState): ShuffledQuestion[] {
  const startIndex = quizState.currentPage * quizState.questionsPerPage
  const endIndex = startIndex + quizState.questionsPerPage
  return quizState.questions.slice(startIndex, endIndex) as ShuffledQuestion[]
}

export function getTotalPages(quizState: QuizState): number {
  return Math.ceil(quizState.questions.length / quizState.questionsPerPage)
}

export function getQuestionProgress(quizState: QuizState): { current: number; total: number } {
  return {
    current: quizState.answers.length,
    total: quizState.questions.length,
  }
}

export function answerQuestion(
  quizState: QuizState,
  questionId: string,
  selectedAnswer: "A" | "B" | "C" | "D",
): QuizState {
  const question = quizState.questions.find((q) => q.id === questionId) as ShuffledQuestion
  if (!question) return quizState

  const isCorrect = selectedAnswer === question.shuffledCorrectAnswer

  const newAnswer: QuizAnswer = {
    questionId,
    selectedAnswer,
    isCorrect,
  }

  // Remove any existing answer for this question and add the new one
  const filteredAnswers = quizState.answers.filter((a) => a.questionId !== questionId)

  return {
    ...quizState,
    answers: [...filteredAnswers, newAnswer],
  }
}

export function canGoToNextPage(quizState: QuizState): boolean {
  const currentPageQuestions = getCurrentPageQuestions(quizState)
  const currentPageAnswers = quizState.answers.filter((answer) =>
    currentPageQuestions.some((q) => q.id === answer.questionId),
  )

  return currentPageAnswers.length === currentPageQuestions.length
}

export function canGoToPreviousPage(quizState: QuizState): boolean {
  return quizState.currentPage > 0
}

export function goToNextPage(quizState: QuizState): QuizState {
  if (!canGoToNextPage(quizState)) return quizState

  const totalPages = getTotalPages(quizState)
  const nextPage = Math.min(quizState.currentPage + 1, totalPages - 1)

  return {
    ...quizState,
    currentPage: nextPage,
  }
}

export function goToPreviousPage(quizState: QuizState): QuizState {
  if (!canGoToPreviousPage(quizState)) return quizState

  return {
    ...quizState,
    currentPage: Math.max(quizState.currentPage - 1, 0),
  }
}

export function completeQuiz(quizState: QuizState): QuizState {
  return {
    ...quizState,
    isCompleted: true,
  }
}

export function calculateScore(quizState: QuizState): {
  correct: number
  total: number
  percentage: number
  timeSpent: number
} {
  const correct = quizState.answers.filter((a) => a.isCorrect).length
  const total = quizState.questions.length
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
  const timeSpent = Date.now() - quizState.startTime

  return {
    correct,
    total,
    percentage,
    timeSpent,
  }
}

export function getAnswerForQuestion(quizState: QuizState, questionId: string): QuizAnswer | undefined {
  return quizState.answers.find((a) => a.questionId === questionId)
}
