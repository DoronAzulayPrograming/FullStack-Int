let root = ReactDOM.createRoot(document.getElementById("root"))

function Nav(){
    return (
        <nav>
            <h2>Logo</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </nav>
    )
}

function App(){
    return (
        <div>
            <Nav />
            <h1>Hello, World</h1>
            <Nav />
            <Nav />
        </div>
    )
}


root.render(<App />)