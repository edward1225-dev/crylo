import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Next.js App</h1>
          <nav>
            <Link href="/">Home</Link> | <Link href="/about">About</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
