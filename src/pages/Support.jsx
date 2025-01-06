

const Support = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Support Center</h1>
          <p className="text-lg mt-4">
            Have questions or need help? We're here for you! Explore FAQs, or
            reach out to our support team for personalized assistance.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {/* Question 1 */}
            <details className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">
                How do I create an account on CineVerse?
              </summary>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Creating an account is easy! Just click on the "Sign Up" button
                on the homepage and fill in the required details.
              </p>
            </details>
            {/* Question 2 */}
            <details className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">
                Can I manage my favorite movies on CineVerse?
              </summary>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Yes! You can add, view, and delete movies in your personalized
                favorites list for easy access.
              </p>
            </details>
            {/* Question 3 */}
            <details className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">
                How can I reset my password?
              </summary>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Click on the "Forgot Password" link on the login page. Follow
                the instructions to reset your password.
              </p>
            </details>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <p className="text-lg mb-4">
            Need further help? Reach out to our support team directly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Drop us an email at:{" "}
                <a
                  href="mailto:support@cineverse.com"
                  className="text-blue-500 underline"
                >
                  support@cineverse.com
                </a>
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Call us at:{" "}
                <span className="font-medium">+1 (800) 123-4567</span>
              </p>
            </div>
          </div>
        </div>

        {/* Ticket Submission Section */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Submit a Support Ticket
          </h2>
          <p className="text-lg mb-6">
            If you have a specific issue, please fill out the form below, and
            we'll get back to you shortly.
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none"
                required
              />
            </div>
            <textarea
              placeholder="Describe your issue"
              rows="5"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none mb-4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
            >
              Submit Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
