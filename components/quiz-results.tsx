"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { calculateScore, type QuizState, type ShuffledQuestion } from "@/lib/quiz-engine"
import { CheckCircle, XCircle, Clock, RotateCcw, Home } from "lucide-react"
import Link from "next/link"

interface QuizResultsData {
  quizState: QuizState
  quizType: string
}

export function QuizResults() {
  const [resultsData, setResultsData] = useState<QuizResultsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const storedResults = localStorage.getItem("quizResults")
    if (!storedResults) {
      router.push("/")
      return
    }

    try {
      const data: QuizResultsData = JSON.parse(storedResults)
      setResultsData(data)
    } catch (error) {
      console.error("Error parsing quiz results:", error)
      router.push("/")
      return
    }

    setIsLoading(false)
  }, [router])

  const formatTime = (milliseconds: number): string => {
    const seconds = Math.floor(milliseconds / 1000)
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    if (minutes > 0) {
      return `${minutes}m ${remainingSeconds}s`
    }
    return `${remainingSeconds}s`
  }

  const getRetakeUrl = (quizType: string): string => {
    switch (quizType) {
      case "Test Phase":
        return "/quiz/test"
      case "Beginner Test":
        return "/quiz/beginner"
      case "Pro Test":
        return "/quiz/pro"
      default:
        return "/"
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-semibold mb-2">Loading Results...</div>
          <div className="text-muted-foreground">Calculating your score</div>
        </div>
      </div>
    )
  }

  if (!resultsData) {
    return null
  }

  const { quizState, quizType } = resultsData
  const score = calculateScore(quizState)
  const questions = quizState.questions as ShuffledQuestion[]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Score Summary */}
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Quiz Complete!</CardTitle>
              <CardDescription className="text-lg">{quizType} Results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">{score.percentage}%</div>
                <div className="text-xl text-muted-foreground">
                  {score.correct} out of {score.total} correct
                </div>
              </div>

              <Progress value={score.percentage} className="w-full h-3" />

              <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Time: {formatTime(score.timeSpent)}
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  {score.correct} Correct
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-destructive" />
                  {score.total - score.correct} Incorrect
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button asChild>
                  <Link href={getRetakeUrl(quizType)} className="flex items-center gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Retake Quiz
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Results */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Detailed Results</h2>
              <p className="text-muted-foreground">Review your answers and explanations</p>
            </div>

            {questions.map((question, index) => {
              const userAnswer = quizState.answers.find((a) => a.questionId === question.id)
              const isCorrect = userAnswer?.isCorrect || false

              return (
                <Card
                  key={question.id}
                  className={`border-l-4 ${isCorrect ? "border-l-primary" : "border-l-destructive"}`}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary">Question {index + 1}</Badge>
                          {isCorrect ? (
                            <Badge className="bg-primary text-primary-foreground">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Correct
                            </Badge>
                          ) : (
                            <Badge variant="destructive">
                              <XCircle className="h-3 w-3 mr-1" />
                              Incorrect
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg leading-relaxed">{question.question}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Answer Options */}
                    <div className="grid gap-2">
                      {(["A", "B", "C", "D"] as const).map((optionKey) => {
                        const isUserAnswer = userAnswer?.selectedAnswer === optionKey
                        const isCorrectAnswer = question.shuffledCorrectAnswer === optionKey

                        let optionClass = "p-3 rounded-lg border text-sm"
                        if (isCorrectAnswer) {
                          optionClass += " bg-primary/10 border-primary text-primary font-medium"
                        } else if (isUserAnswer && !isCorrect) {
                          optionClass += " bg-destructive/10 border-destructive text-destructive"
                        } else {
                          optionClass += " bg-muted/50"
                        }

                        return (
                          <div key={optionKey} className={optionClass}>
                            <div className="flex items-center gap-3">
                              <span className="font-semibold">{optionKey}.</span>
                              <span className="flex-1">{question.options[optionKey]}</span>
                              {isUserAnswer && (
                                <Badge variant="outline" className="text-xs">
                                  Your Answer
                                </Badge>
                              )}
                              {isCorrectAnswer && (
                                <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary">
                                  Correct
                                </Badge>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Explanation */}
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm">Explanation:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{question.explanation}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Bottom Actions */}
          <div className="mt-12 text-center">
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href={getRetakeUrl(quizType)} className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Retake Quiz
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
