export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="border-b border-slate-700 p-6">
        <h1 className="text-2xl font-bold gradient-text">Horizons Blog</h1>
      </header>
      <main className="container mx-auto p-6">{children}</main>
      <footer className="border-t border-slate-700 p-6 text-center text-slate-500">
        © {new Date().getFullYear()} Horizons. All rights reserved.
      </footer>
    </div>
  );
}
