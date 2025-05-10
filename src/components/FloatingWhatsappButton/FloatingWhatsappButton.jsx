import React from 'react'
import styles from './FloatingWhatsAppButton.module.css'

const FloatingWhatsAppButton = () => {
  const phoneNumber = '393293655954'
  const url = `https://wa.me/${phoneNumber}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingBtn}
    >
      <i className="bi bi-whatsapp"></i>
      <span className={styles.tooltip}>Contattaci su WhatsApp</span>
    </a>
  )
}

export default FloatingWhatsAppButton
