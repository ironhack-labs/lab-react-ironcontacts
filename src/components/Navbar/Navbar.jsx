// Default exports
export default function Navbar({ title }) {
  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{title}</span>
      </div>
    </nav>
  )
}