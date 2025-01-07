import  { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    // Add your subscription API or backend logic here
    console.log("Subscribed with email:", email);
    setMessage("Thank you for subscribing to CineVerse!");
    setEmail(""); // Reset email input
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-4 relative mt-5 md:mt-6 lg:mt-7">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl  font-bold mb-4 font-Cinzel">
          🎬 Stay Updated with CineVerse!
        </h2>
        <p className="text-lg mb-8">
          Be the first to know about the latest movies, upcoming releases, and
          exclusive offers. Subscribe to our newsletter and never miss a moment!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-3 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition"
          >
            Subscribe Now
          </button>
        </form>

        {message && <p className="text-sm mt-4 text-green-400">{message}</p>}

        <p className="text-sm text-gray-400 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-96 w-96 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-40 -left-32 -top-32"></div>
        <div className="h-96 w-96 bg-gradient-to-r from-pink-500 to-yellow-600 blur-3xl opacity-40 -right-32 -bottom-32"></div>
      </div>
    </section>
  );
};

export default Newsletter;
