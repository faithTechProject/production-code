import { Link } from "react-router-dom"

export function Home() {
    return (
        <>
            <h1>Home World</h1>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/create">Create</Link></div>
            <div><Link to="/stories">Stories</Link></div>
            <div><Link to="/help">Help</Link></div>
            <div><Link to="/testPageDatabase">Data</Link></div>
        </>
    )
}