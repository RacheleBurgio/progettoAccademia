import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLocandine = () => {
  const [locandine, setLocandine] = useState([])
  const [file, setFile] = useState(null)
  const [showPanel, setShowPanel] = useState(false)

  const token = localStorage.getItem('token')
  const userRole = localStorage.getItem('role')

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/admin/locandine', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      })

      if (!res.ok) throw new Error('Upload fallito')

      const newLocandina = await res.json()
      setLocandine([newLocandina, ...locandine])
    } catch (err) {
      console.error('Errore upload:', err)
      alert('Operazione consentita solo agli amministratori')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Eliminare questa locandina?')) return

    try {
      const res = await fetch(`/api/admin/locandine/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })

      if (res.ok) {
        setLocandine(locandine.filter((l) => l.id !== id))
      }
    } catch (err) {
      console.error('Errore eliminazione:', err)
    }
  }

  return (
    <div>
      {/* Bottone per mostrare/nascondere il pannello */}
      <button onClick={() => setShowPanel(!showPanel)}>
        {showPanel
          ? 'Nascondi Gestione Locandine'
          : 'Mostra Gestione Locandine'}
      </button>

      {showPanel && (
        <div className="admin-panel">
          <h2>Gestione Locandine (Admin)</h2>

          <form onSubmit={handleUpload}>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              accept="image/*"
            />
            <button type="submit">Carica</button>
          </form>

          <div className="locandine-grid">
            {locandine.map((locandina) => (
              <div key={locandina.id} className="locandina-card">
                <img src={locandina.immagineurl} alt="Locandina" />
                <button
                  onClick={() => handleDelete(locandina.id)}
                  className="delete-btn"
                >
                  Elimina
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminLocandine
