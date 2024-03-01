/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/heewSnbTOKh
 */
import Link from "next/link"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-16 xl:py-24">
      <div className="container flex flex-col items-center space-y-4 px-4 text-center md:space-y-8 md:px-6">
        <img
          alt="Hero"
          className="aspect-video overflow-hidden rounded-xl object-bottom"
          height="400"
          src="/placeholder.svg"
          width="1200"
        />
        <div className="space-y-2">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I'm Sarah</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl md:mx-auto/none dark:text-gray-400">
              I design delightful user experiences that bring ideas to life.
            </p>
          </div>
          <div>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
              href="#"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}