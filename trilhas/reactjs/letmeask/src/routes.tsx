import { BrowserRouter, Routes, Route } from "react-router-dom"


//importação das páginas
import { Home } from "./pages/Home"
import { NewRoom } from "./pages/NewRoom"
import { AuthContextProvider } from "./contexts/AuthContextProvider"


function WebRoutes() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rooms/new" element={<NewRoom />} />
                </Routes>
            </AuthContextProvider>
        </BrowserRouter>
    )
}

export { WebRoutes }