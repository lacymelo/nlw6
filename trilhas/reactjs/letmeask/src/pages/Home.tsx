import { useNavigate } from "react-router-dom"
import '../styles/auth.scss'
import logoImg from "../assets/images/logo.svg"
import googleIconImg from "../assets/images/google-icon.svg"

import { Button } from "../components/Button"
import { Sidebar } from "../components/Sidebar"
import { useAuth } from "../hooks/useAuth"

function Home() {
    const navigate = useNavigate()
    const { user, signInWithGoogle } = useAuth()

    async function handleCreateRoom() {
        if(!user?.name){
            await signInWithGoogle()
        }
        return navigate('/rooms/new')
    }

    return (
        <div id="page-auth">
            <Sidebar
                textStrong="Crie slas Q&A ao-vivo"
                textP="Tire as dúvidas da sua audiência em tempo-real"
            />

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />

                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logo do google" />
                        Crie sua sala com o Google
                    </button>

                    <div className="separator">ou entre em uma sala</div>

                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />

                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export { Home }