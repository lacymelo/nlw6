import { Link } from 'react-router-dom'
import logoImg from "../assets/images/logo.svg"

import '../styles/auth.scss'
import { Button } from "../components/Button"
import { Sidebar } from "../components/Sidebar"

function NewRoom() {

    return (
        <div id="page-auth">
            <Sidebar
                textStrong="Toda pergunta tem uma resposta."
                textP="Aprenda e compartilhe conhecimento com outras pessoas" 
            />

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />

                    <h2>Criar uma nova sala</h2>

                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />

                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>

                    <p>
                        Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}

export { NewRoom }