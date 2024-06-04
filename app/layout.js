import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo></Logo>
          <Navigation></Navigation>
        </header>
        <main>{children}</main>
        <footer>Copyright</footer>
      </body>
    </html>
  );
}