import Navbar from '../components/navbar';
import './globals.css';

export default function RootLayout({ children }) {
  const navigationList = ["Home", "About", "Contact", "Cart"];

  return (
    <html lang="ka">
      <body>
        <Navbar list={navigationList} />
        {children}
      </body>
    </html>
  );
}