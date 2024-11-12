import { Link } from "react-router-dom"

function Page404() {
    return <div><h1>ERROR 404</h1>
        <h2>Nie znaleziono strony której szukasz</h2>
        <Link to='/'>Wróć do strony głównej</Link>
    </div>
}

export default Page404