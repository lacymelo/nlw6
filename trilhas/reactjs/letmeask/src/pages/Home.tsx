import { useNavigate } from "react-router-dom"
import '../styles/auth.scss'
import logoImg from "../assets/images/logo.svg"
import googleIconImg from "../assets/images/google-icon.svg"

import { Button } from "../components/Button"
import { Sidebar } from "../components/Sidebar"
import { useAuth } from "../hooks/useAuth"
import { FormEvent, useState } from "react"
import { child, get, getDatabase, query, ref } from "firebase/database"

function Home() {
    const navigate = useNavigate()
    const { user, signInWithGoogle } = useAuth()
    const [roomCode, setRoomCode] = useState('')

    async function handleCreateRoom() {
        if (!user?.name) {
            await signInWithGoogle()
        }

        return navigate(`/rooms/new`)
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault()

        if (roomCode.trim() === '') {
            return
        }

        const database = ref(getDatabase());

        get(child(database, `rooms/${roomCode}`)).then((roomRef) => {
            if (roomRef.exists()) {
                console.log(roomRef.val());
                return navigate(`/rooms/${roomCode}`)
            } else {
                alert("Room does not exists");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div id="page-auth">
            <Sidebar
                textStrong="Crie salas Q&A ao-vivo"
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

                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            value={roomCode}
                            onChange={event => setRoomCode(event.target.value)}
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