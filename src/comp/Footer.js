
import React from 'react'

export default function Footer() {
  return (
    <div style={styles.footer}>
      <p>
        This website uses cookies to improve your web experience.{" "}
        <button style={styles.button}>Accept</button>
      </p>
    </div>
  )
}



const styles = {
  footer: {
    padding: "10px",
    backgroundColor: "#fff",
    textAlign: "center",
    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
  },
  button: {
    padding: "5px 10px",
    backgroundColor: "#5A67D8",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};


