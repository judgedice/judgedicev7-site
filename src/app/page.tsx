import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { CardGrid } from '../components/CardGrid';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <section className="py-12 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Services & Expertise</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
        </div>
        <CardGrid />
      </section>
    </main>
  );
} 