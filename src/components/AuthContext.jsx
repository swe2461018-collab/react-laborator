import { createContext, useState } from "react"

// Context болон Provider-ийг лабораторийн дагуу нэг файлд байрлуулсан.
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)

  function register(newUser) {
    const email = newUser.email.trim().toLowerCase()
    if (users.some((item) => item.email === email)) {
      return { success: false, message: "Энэ имэйл бүртгэлтэй байна!" }
    }
    // Сургалтын жишээ: өгөгдөл зөвхөн санах ойд хадгалагдана.
    setUsers((prev) => [...prev, { ...newUser, email }])
    return { success: true, message: "Амжилттай бүртгүүллээ!" }
  }

  function login(email, password) {
    const foundUser = users.find((item) => item.email === email.trim().toLowerCase() && item.password === password)
    if (!foundUser) return { success: false, message: "Имэйл эсвэл нууц үг буруу байна!" }
    const { firstname, lastname, email: userEmail } = foundUser
    setUser({ firstname, lastname, email: userEmail })
    return { success: true, message: "Амжилттай нэвтэрлээ!" }
  }

  function logout() {
    setUser(null)
  }

  return <AuthContext.Provider value={{ users, user, register, login, logout }}>{children}</AuthContext.Provider>
}
