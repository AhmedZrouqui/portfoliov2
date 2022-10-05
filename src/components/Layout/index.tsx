import React from "react";
import Footer from "../Footer";
import Header from "../Header";

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout(props: ILayoutProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen w-full max-w-[1920px] bg-paper p-8">
      <header>
        <Header />
      </header>
      <section className="container py-16 px-10">{props.children}</section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
