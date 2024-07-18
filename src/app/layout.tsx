import "./globals.css";
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
        <body className={roboto.className}>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
