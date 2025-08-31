"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface QuizNavigationProps {
  currentPage: number
  totalPages: number
  questionsAnswered: number
  totalQuestions: number
  canGoNext: boolean
  canGoPrevious: boolean
  onNext: () => void
  onPrevious: () => void
  onComplete: () => void
  isLastPage: boolean
}

export function QuizNavigation({
  currentPage,
  totalPages,
  questionsAnswered,
  totalQuestions,
  canGoNext,
  canGoPrevious,
  onNext,
  onPrevious,
  onComplete,
  isLastPage,
}: QuizNavigationProps) {
  const progressPercentage = (questionsAnswered / totalQuestions) * 100

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Progress</span>
          <span>
            {questionsAnswered} of {totalQuestions} answered
          </span>
        </div>
        <Progress value={progressPercentage} className="w-full" />
      </div>

      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="flex items-center gap-2 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="text-sm text-muted-foreground">
          Page {currentPage + 1} of {totalPages}
        </div>

        {isLastPage && questionsAnswered === totalQuestions ? (
          <Button onClick={onComplete} className="flex items-center gap-2">
            Complete Quiz
          </Button>
        ) : (
          <Button onClick={onNext} disabled={!canGoNext} className="flex items-center gap-2">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
