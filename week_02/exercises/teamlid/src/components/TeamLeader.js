import React from 'react'
import styles from './TeamMember.module.css'

export default function TeamLeader({firstName, secondName, role, email, phone, image}) {
  return (
    <div className={`${styles.teammember} ${styles.teamleader}`}>
        <img src={image} alt={firstName} />
        <div>
            <h1>{firstName} {secondName}</h1>
            <h2>{role}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    </div>
  )
}
