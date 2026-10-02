import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body>
        {children}
      </body>
    </html>
  );
}