import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoImg from "../assets/images/logo.svg"

import '../styles/auth.scss'
import { Button } from "../components/Button"
import { Sidebar } from "../components/Sidebar"
import { getDatabase, push, ref, set } from "firebase/database";
import { useAuth } from '../hooks/useAuth'



function NewRoom() {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [newRoom, setNewRoom] = useState('')

    async function handleCreateRoom(event: FormEvent){
        event.preventDefault() 
        
        if(newRoom.trim() === ''){
            return
        }
        const database = getDatabase()

        const roomRef = ref(database, 'rooms')

        const firebaseRoom = push(roomRef, {
            title: newRoom,
            authorId: user?.id
        })

        return navigate(`/rooms/${firebaseRoom.key}`)
    }

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

                    <form onSubmit={handleCreateRoom}>
                        <input
                            value={newRoom}
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
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