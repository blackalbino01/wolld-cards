import "./globals.css";

export const metadata = {
  title: 'WOLLD Gift Cards',
  description: 'Buy and sell gift cards online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
