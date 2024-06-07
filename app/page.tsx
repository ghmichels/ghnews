import Header from "./components/header";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <main className="flex justify-center items-center">Home</main>
    </>
  );
}
