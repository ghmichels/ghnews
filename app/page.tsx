import Header from "./components/header";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <main className="flex items-center justify-center">Home</main>
    </>
  );
}
