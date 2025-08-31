"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { addQuestion, updateQuestion, type Question } from "@/lib/questions"

interface QuestionFormProps {
  question?: Question
  onSave: () => void
  onCancel: () => void
}

export function QuestionForm({ question, onSave, onCancel }: QuestionFormProps) {
  const [formData, setFormData] = useState({
    question: question?.question || "",
    optionA: question?.options.A || "",
    optionB: question?.options.B || "",
    optionC: question?.options.C || "",
    optionD: question?.options.D || "",
    correctAnswer: question?.correctAnswer || ("A" as const),
    explanation: question?.explanation || "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const questionData = {
      question: formData.question,
      options: {
        A: formData.optionA,
        B: formData.optionB,
        C: formData.optionC,
        D: formData.optionD,
      },
      correctAnswer: formData.correctAnswer,
      explanation: formData.explanation,
    }

    try {
      if (question) {
        updateQuestion(question.id, questionData)
      } else {
        addQuestion(questionData)
      }
      onSave()
    } catch (error) {
      console.error("Error saving question:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{question ? "Edit Question" : "Add New Question"}</CardTitle>
        <CardDescription>
          {question ? "Update the question details below" : "Fill in the details to create a new question"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="question">Question</Label>
            <Textarea
              id="question"
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              placeholder="Enter your question here..."
              required
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="optionA">Option A</Label>
              <Input
                id="optionA"
                value={formData.optionA}
                onChange={(e) => setFormData({ ...formData, optionA: e.target.value })}
                placeholder="Option A"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="optionB">Option B</Label>
              <Input
                id="optionB"
                value={formData.optionB}
                onChange={(e) => setFormData({ ...formData, optionB: e.target.value })}
                placeholder="Option B"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="optionC">Option C</Label>
              <Input
                id="optionC"
                value={formData.optionC}
                onChange={(e) => setFormData({ ...formData, optionC: e.target.value })}
                placeholder="Option C"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="optionD">Option D</Label>
              <Input
                id="optionD"
                value={formData.optionD}
                onChange={(e) => setFormData({ ...formData, optionD: e.target.value })}
                placeholder="Option D"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="correctAnswer">Correct Answer</Label>
            <Select
              value={formData.correctAnswer}
              onValueChange={(value: "A" | "B" | "C" | "D") => setFormData({ ...formData, correctAnswer: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select correct answer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">A - {formData.optionA || "Option A"}</SelectItem>
                <SelectItem value="B">B - {formData.optionB || "Option B"}</SelectItem>
                <SelectItem value="C">C - {formData.optionC || "Option C"}</SelectItem>
                <SelectItem value="D">D - {formData.optionD || "Option D"}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="explanation">Explanation</Label>
            <Textarea
              id="explanation"
              value={formData.explanation}
              onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
              placeholder="Explain why this is the correct answer..."
              required
              rows={3}
            />
          </div>

          <div className="flex gap-4">
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading ? "Saving..." : question ? "Update Question" : "Add Question"}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel} className="flex-1 bg-transparent">
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
