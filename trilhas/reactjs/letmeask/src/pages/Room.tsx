import { useParams } from 'react-router-dom'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import "../styles/room.scss"
import { RoomCode } from '../components/RoomCode'
import { FormEvent, useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { child, get, getDatabase, onValue, push, ref } from 'firebase/database'

type RoomParams = {
    id: string;
}

type Questions = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
}

type FirebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
}>

function Room() {
    const { user } = useAuth();
    const { id } = useParams<RoomParams>()
    const [newQuestion, setNewQuestion] = useState('')
    const [questions, setQuestions] = useState<Questions[]>([])
    const [title, setTitle] = useState('')

    useEffect(() => {
        const database = getDatabase();
        const listeningEvent = ref(database, `rooms/${id}`);
        
        onValue(listeningEvent, (room) => {
            const databaseRoom = room.val()
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions
            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered,
                }
            })

            setTitle(databaseRoom.title)
            setQuestions(parsedQuestions)
        })
    }, [id])

    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault()

        if (newQuestion.trim() === '') {
            return
        }

        if (!user?.name) {
            throw new Error('User do not authenticated')
        }

        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar,
            },
            isHighlighted: false,
            isAnswered: false
        }

        const database = getDatabase()

        const questionRef = ref(database, `rooms/${id}/questions`)

        const firebaseQuestion = await push(questionRef, question)

        setNewQuestion('')
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />

                    <RoomCode code={id ? id : ''} />
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>

                <form onSubmit={handleSendQuestion}>
                    <textarea
                        placeholder='O que você quer perguntar?'
                        value={newQuestion}
                        onChange={event => setNewQuestion(event.target.value)}
                    />

                    <div className="form-footer">
                        {
                            user ?
                                <div className="user-info">
                                    <img src={user.avatar} alt={user.name} />
                                    <span>{user.name}</span>
                                </div>
                                :
                                <span>Para enviar uma pergunta<button>, Faça seu login </button>.</span>
                        }

                        <Button type="submit" disabled={!user}>
                            Enviar pergunta
                        </Button>
                    </div>
                </form>

            </main>
        </div>
    )
}

export { Room }