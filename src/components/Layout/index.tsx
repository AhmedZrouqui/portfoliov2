import React from "react";
import Footer from "../Footer";
import Header from "../Header";

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout(props: ILayoutProps) {
  return (
    <div
      className={`flex flex-col justify-between min-h-screen w-full max-w-[1920px] bg-paper p-8 dark:bg-blackish`}
    >
      <header>
        <Header />
      </header>
      <div className="container py-16 px-0 w-full">{props.children}</div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
