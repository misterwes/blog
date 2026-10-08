import * as React from "react"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="site-name" to="/">The Notebook</Link>
        <p className="site-description">Notes, reporting, and things worth noticing.</p>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} The Notebook</p>
      </footer>
    </div>
  )
}
