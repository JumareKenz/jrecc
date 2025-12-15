import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-blue via-white to-sky-blue">
      <div className="text-center p-8 bg-white rounded-3xl shadow-2xl border-2 border-soft-grey max-w-md mx-4">
        <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-impact-green via-impact-green-light to-gold mb-4">
          404
        </h1>
        <p className="text-2xl md:text-3xl text-charcoal mb-8 font-bold">Page Not Found</p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-impact-green text-white rounded-xl font-bold hover:bg-impact-green-light shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-impact-green-light"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
