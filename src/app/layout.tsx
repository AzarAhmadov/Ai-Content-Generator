import "./tailwind.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Poppins } from 'next/font/google'

const roboto = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <title>Content AI</title>
        <link rel="icon" type="image/x-icon" href="/svgs/logo.svg" />
        <body className={roboto.className}>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
