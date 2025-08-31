"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { QuizQuestion } from "./quiz-question"
import { QuizNavigation } from "./quiz-navigation"
import { getRandomQuestions } from "@/lib/questions"
import {
  initializeQuiz,
  getCurrentPageQuestions,
  getTotalPages,
  getQuestionProgress,
  answerQuestion,
  canGoToNextPage,
  canGoToPreviousPage,
  goToNextPage,
  goToPreviousPage,
  completeQuiz,
  getAnswerForQuestion,
  type QuizState,
} from "@/lib/quiz-engine"

interface QuizInterfaceProps {
  questionCount: number
  quizType: string
}

export function QuizInterface({ questionCount, quizType }: QuizInterfaceProps) {
  const [quizState, setQuizState] = useState<QuizState | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const questions = getRandomQuestions(questionCount)
    if (questions.length === 0) {
      alert("No questions available. Please add some questions first.")
      router.push("/")
      return
    }

    const initialQuizState = initializeQuiz(questions, 10)
    setQuizState(initialQuizState)
    setIsLoading(false)
  }, [questionCount, router])

  const handleAnswerSelect = (questionId: string, answer: "A" | "B" | "C" | "D") => {
    if (!quizState) return

    const newQuizState = answerQuestion(quizState, questionId, answer)
    setQuizState(newQuizState)
  }

  const handleNext = () => {
    if (!quizState) return

    const newQuizState = goToNextPage(quizState)
    setQuizState(newQuizState)
  }

  const handlePrevious = () => {
    if (!quizState) return

    const newQuizState = goToPreviousPage(quizState)
    setQuizState(newQuizState)
  }

  const handleComplete = () => {
    if (!quizState) return

    const completedQuizState = completeQuiz(quizState)

    // Store quiz results in localStorage for results page
    localStorage.setItem(
      "quizResults",
      JSON.stringify({
        quizState: completedQuizState,
        quizType,
      }),
    )

    router.push("/results")
  }

  if (isLoading || !quizState) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-semibold mb-2">Loading Quiz...</div>
          <div className="text-muted-foreground">Preparing your questions</div>
        </div>
      </div>
    )
  }

  const currentPageQuestions = getCurrentPageQuestions(quizState)
  const totalPages = getTotalPages(quizState)
  const progress = getQuestionProgress(quizState)
  const isLastPage = quizState.currentPage === totalPages - 1

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{quizType} Quiz</h1>
            <p className="text-muted-foreground">
              Answer all questions to complete the quiz. You can navigate between pages using the buttons below.
            </p>
          </div>

          <div className="space-y-8">
            {currentPageQuestions.map((question, index) => {
              const questionNumber = quizState.currentPage * quizState.questionsPerPage + index + 1
              const selectedAnswer = getAnswerForQuestion(quizState, question.id)

              return (
                <QuizQuestion
                  key={question.id}
                  question={question}
                  questionNumber={questionNumber}
                  totalQuestions={quizState.questions.length}
                  selectedAnswer={selectedAnswer}
                  onAnswerSelect={(answer) => handleAnswerSelect(question.id, answer)}
                />
              )
            })}
          </div>

          <div className="mt-12">
            <QuizNavigation
              currentPage={quizState.currentPage}
              totalPages={totalPages}
              questionsAnswered={progress.current}
              totalQuestions={progress.total}
              canGoNext={canGoToNextPage(quizState)}
              canGoPrevious={canGoToPreviousPage(quizState)}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onComplete={handleComplete}
              isLastPage={isLastPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
