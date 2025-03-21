import React from 'react'
import styles from "./Footer.module.css"

const PhotoGrid = ({ gridNumber }) => {
  return (
    <div>
      {Array.from({ length: gridNumber }).map((_, index) => (
        <div className={styles.boxStyle} key={index} style={{ marginBottom: '1rem' }}>
        </div>
      ))}
    </div>
  )
}

export default PhotoGrid
