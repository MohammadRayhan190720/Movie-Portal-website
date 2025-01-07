
const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl  font-bold mb-6">
          About CineVerse
        </h1>
        <p className="text-lg mb-8">
          Welcome to{" "}
          <span className="text-blue-500 font-semibold">CineVerse</span>, your
          ultimate destination for exploring the magical world of movies. Our
          mission is to provide movie enthusiasts with an effortless way to
          discover, learn, and connect through their favorite films.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300">
              To become the go-to platform for movie lovers worldwide, where
              stories come to life and every movie has a home. CineVerse
              connects people to the films they love.
            </p>
          </div>

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Discover movies with our easy-to-navigate portal.</li>
              <li>View detailed information about your favorite films.</li>
              <li>Manage your favorites with a personalized touch.</li>
              <li>Stay updated with curated recommendations.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
          <p className="text-lg mb-6">
            Become a part of the CineVerse family and explore the endless
            stories the movie world has to offer. Let us take you on a cinematic
            adventure!
          </p>
          <a
            href="/signup"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
