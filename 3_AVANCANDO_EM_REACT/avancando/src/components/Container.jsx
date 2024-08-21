function Container({ children, myValue }) {
  return (
    <div>
        <h2>Este é o título do container</h2>
        {children}  {/* Abraça o conteúdo interno dentro do App.jsx */}
        <p>O valor é {myValue}</p>
    </div>
  )
}

export default Container