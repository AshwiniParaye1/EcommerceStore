import Header from "@/app/components/Header";
import Footer from "./components/Footer";

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col mx-auto px-4 md:px-6 lg:px-8 container">
      <Header />
      <main className="flex-1 px-4 py-6">Main Content Here</main>
      <Footer />
    </div>
  );
}
