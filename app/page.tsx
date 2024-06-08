import Header from "./components/header";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Header />

      <NavBar />
      <main className="m-auto flex h-screen max-w-7xl items-center justify-center">
        Home
      </main>
    </>
  );
}
