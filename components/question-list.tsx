"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllQuestions, deleteQuestion, type Question } from "@/lib/questions"
import { Trash2, Edit, Plus } from "lucide-react"

interface QuestionListProps {
  onEdit: (question: Question) => void
  onAdd: () => void
}

export function QuestionList({ onEdit, onAdd }: QuestionListProps) {
  const [questions, setQuestions] = useState<Question[]>([])

  const loadQuestions = () => {
    setQuestions(getAllQuestions())
  }

  useEffect(() => {
    loadQuestions()
  }, [])

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this question?")) {
      deleteQuestion(id)
      loadQuestions()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Question Management</h2>
          <p className="text-muted-foreground">Manage your quiz questions</p>
        </div>
        <Button onClick={onAdd} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Question
        </Button>
      </div>

      <div className="grid gap-4">
        {questions.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-muted-foreground">No questions found. Add your first question to get started.</p>
            </CardContent>
          </Card>
        ) : (
          questions.map((question) => (
            <Card key={question.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{question.question}</CardTitle>
                    <CardDescription className="mt-2">
                      Correct Answer: <Badge variant="secondary">Option {question.correctAnswer}</Badge>
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => onEdit(question)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(question.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>A: {question.options.A}</div>
                  <div>B: {question.options.B}</div>
                  <div>C: {question.options.C}</div>
                  <div>D: {question.options.D}</div>
                </div>
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-sm">
                    <strong>Explanation:</strong> {question.explanation}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
