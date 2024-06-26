import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
  title: {
    template: "%s - The Wild Oasis",
    default: "Welcome - The Wild Oasis",
  },
  description:
    "The Wild Oasis is a place to find peace and tranquility in the midst of the chaos of life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-900 text-primary-100 min-h-screen flex flex-col antialiased relative`}
      >
        <Header>
          <Logo></Logo>
          <Navigation></Navigation>
        </Header>
        <div className=" flex-1 px-8 py-12 ">
          <main className=" max-w-7xl mx-auto ">{children}</main>
        </div>
      </body>
    </html>
  );
}
