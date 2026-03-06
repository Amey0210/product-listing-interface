import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("TNIT2026 Submission:", formData);
    alert("Form submitted! Check the browser console (F12).");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <nav className="bg-white shadow-sm p-6 mb-8 text-center border-b">
        <h1 className="text-2xl font-bold text-gray-900">TNIT Product Listing</h1>
      </nav>

      <main className="flex-grow container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <footer className="bg-white mt-16 border-t border-gray-200 p-10">
        <div className="max-w-lg mx-auto bg-gray-50 p-8 rounded-2xl shadow-sm border">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Newsletter Subscription</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your name"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;