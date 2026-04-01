import React, { useState } from 'react'

export default function NameForm() {
  const [name, setName] = useState('')

  return (
    <section>
      <label htmlFor="name-input">Nome:</label>
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite seu nome"
        aria-label="nome"
      />
      <div aria-live="polite" style={{ marginTop: 12 }}>
        {name ? <h1>{name}</h1> : <p>Nenhum nome informado.</p>}
      </div>
    </section>
  )
}