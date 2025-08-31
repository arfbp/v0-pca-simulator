// Simple local authentication system
export interface User {
  username: string
  isAdmin: boolean
}

const ADMIN_CREDENTIALS = {
  username: "arif",
  password: "123",
}

export function authenticateUser(username: string, password: string): User | null {
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    return {
      username: ADMIN_CREDENTIALS.username,
      isAdmin: true,
    }
  }
  return null
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null

  const userStr = localStorage.getItem("currentUser")
  if (!userStr) return null

  try {
    return JSON.parse(userStr)
  } catch {
    return null
  }
}

export function setCurrentUser(user: User): void {
  if (typeof window === "undefined") return
  localStorage.setItem("currentUser", JSON.stringify(user))
}

export function logout(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem("currentUser")
}
