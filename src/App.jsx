
import "./App.css"

// React Router-ийн шаардлагатай компонентууд
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

// Header component
import Header from "./components/Header"

// Navbar component
import Navbar from "./components/Navbar"

// Footer component
import Footer from "./components/Footer"

// Нүүр хуудасны component
import Home from "./pages/Home"

// Сургалтын хуудасны component
import Surgalt from "./pages/Surgalt"
import Haais from "./pages/Haais"
import UdirdakhZovlol from "./pages/UdirdakhZovlol"
import HogjliinBodlogo from "./pages/HogjliinBodlogo"
import HamtynAjillagaa from "./pages/HamtynAjillagaa"
import Oyutan from "./pages/Oyutan"
import RektorynAjlynAlba from "./pages/RektorynAjlynAlba"
import HolbooBarih from "./pages/HolbooBarih"

// Үндсэн App component
function App() {
  return (
    <BrowserRouter>

      {/* Веб сайтын бүх хэсгийг нэг div дотор багцална */}
      <div className="website">

        {/* HEADER */}
        <Header />

        {/* NAVBAR */}
        <Navbar />

        {/* ROUTING */}
        <Routes>

          {/* НҮҮР ХУУДАС */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* ХААИС ХУУДАС */}
          <Route path="/haais" element={<Haais />} />
          <Route path="/udirdakh-zovlol" element={<UdirdakhZovlol />} />
          <Route path="/hogjliin-bodlogo" element={<HogjliinBodlogo />} />
          <Route path="/hamtyn-ajillagaa" element={<HamtynAjillagaa />} />
          <Route path="/oyutan" element={<Oyutan />} />
          <Route path="/rektoryn-ajlyn-alba" element={<RektorynAjlynAlba />} />
          <Route path="/holboo-barih" element={<HolbooBarih />} />

          {/* СУРГАЛТ ХУУДАС */}
          <Route
            path="/surgalt"
            element={<Surgalt />}
          />

        </Routes>

        {/* FOOTER */}
        <Footer />

        {/* COPYRIGHT */}
        <div className="copyright">
          © 2026 Хөдөө аж ахуйн их сургууль
        </div>

      </div>

    </BrowserRouter>
  )
}

// App component-ийг export хийж байна
export default App
