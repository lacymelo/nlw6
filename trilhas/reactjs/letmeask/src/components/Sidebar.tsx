import "../styles/aside.scss"
import IllustrationImg from "../assets/images/illustration.svg"

type AsideProps = {
    textStrong: string;
    textP: string;
}

function Sidebar(props: AsideProps) {
    const { textStrong, textP } = props
    return (
        <aside>
            <img src={IllustrationImg} alt="Ilustração simboliza perguntas e respostas" />
            <strong>{textStrong}</strong>
            <p>{textP}</p>
        </aside>
    )
}

export { Sidebar }