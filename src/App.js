import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Users } from "./Users/pages/Users"
import { NewPlace } from "./Places/pages/new-place"
import { MainNavigation } from "./Shared/components/Navigation/MainNavigation"

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/new-places" element={<NewPlace />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
