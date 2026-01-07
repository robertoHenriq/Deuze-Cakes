import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Cakes } from "@/pages/Cakes";

export default function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-pink-900 flex flex-col">
      <Header />
      <main className="flex-1">
        <Cakes />
      </main>
      <Footer />
    </div>
  );
}
