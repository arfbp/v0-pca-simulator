"use client"

import { useState } from "react"
import { AuthGuard } from "@/components/auth-guard"
import { QuestionList } from "@/components/question-list"
import { QuestionForm } from "@/components/question-form"
import { Button } from "@/components/ui/button"
import { logout, getCurrentUser } from "@/lib/auth"
import { useRouter } from "next/navigation"
import type { Question } from "@/lib/questions"
import { LogOut, ArrowLeft } from "lucide-react"

export default function AdminPage() {
  const [view, setView] = useState<"list" | "add" | "edit">("list")
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null)
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const handleEdit = (question: Question) => {
    setEditingQuestion(question)
    setView("edit")
  }

  const handleAdd = () => {
    setEditingQuestion(null)
    setView("add")
  }

  const handleSave = () => {
    setView("list")
    setEditingQuestion(null)
  }

  const handleCancel = () => {
    setView("list")
    setEditingQuestion(null)
  }

  return (
    <AuthGuard requireAdmin>
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                {view !== "list" && (
                  <Button variant="ghost" size="sm" onClick={() => setView("list")}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to List
                  </Button>
                )}
                <div>
                  <h1 className="text-2xl font-bold">Admin Panel</h1>
                  <p className="text-sm text-muted-foreground">Welcome, {getCurrentUser()?.username}</p>
                </div>
              </div>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {view === "list" && <QuestionList onEdit={handleEdit} onAdd={handleAdd} />}
          {(view === "add" || view === "edit") && (
            <QuestionForm question={editingQuestion} onSave={handleSave} onCancel={handleCancel} />
          )}
        </main>
      </div>
    </AuthGuard>
  )
}
