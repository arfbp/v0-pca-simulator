"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { ShuffledQuestion, QuizAnswer } from "@/lib/quiz-engine"

interface QuizQuestionProps {
  question: ShuffledQuestion
  questionNumber: number
  totalQuestions: number
  selectedAnswer?: QuizAnswer
  onAnswerSelect: (answer: "A" | "B" | "C" | "D") => void
}

export function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
}: QuizQuestionProps) {
  const options: Array<{ key: "A" | "B" | "C" | "D"; value: string }> = [
    { key: "A", value: question.options.A },
    { key: "B", value: question.options.B },
    { key: "C", value: question.options.C },
    { key: "D", value: question.options.D },
  ]

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start mb-4">
          <Badge variant="secondary">
            Question {questionNumber} of {totalQuestions}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-relaxed">{question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {options.map(({ key, value }) => (
            <Button
              key={key}
              variant={selectedAnswer?.selectedAnswer === key ? "default" : "outline"}
              className="w-full justify-start text-left h-auto p-4 text-wrap"
              onClick={() => onAnswerSelect(key)}
            >
              <span className="font-semibold mr-3">{key}.</span>
              <span className="flex-1">{value}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
