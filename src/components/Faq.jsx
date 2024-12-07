import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Faq = () => {
  return (
    <div className="bg-background">
      <div className="mt-10 lg:mt-16 max-w-7xl mx-auto text-text py-6 lg:py-10">
        <h3 className="font-Cinzel font-semibold  text-center  text-3xl md:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h3>
        <p className=" w-1/2 mx-auto text-center mt-4">
          Find Answers to Common Questions: Your Guide to Using CineVerse for
          Seamless Movie Exploration, Favorites, and More!
        </p>

        <div className="mt-6 lg:mt-10 space-y-3">
          <div className="collapse collapse-plus bg-[#272727] hover:bg-[#3F3F3F] ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-2xl font-bold">
              What is CineInverse?
            </div>
            <div className="collapse-content">
              <p className="text-xl text-justify">
                CineVerse is a user-friendly movie portal designed to simplify
                movie exploration. It allows users to browse movies, view
                detailed information, manage favorites, and stay updated with
                the latest releases, creating a seamless and enjoyable cinematic
                experience.
                <br></br>
                CineVerse is your ultimate destination for movie lovers,
                offering personalized recommendations, interactive features,
                user reviews, and a vibrant community to enhance your movie
                journey. Discover, explore, and immerse yourself in the world of
                cinema effortlessly with CineVerse
              </p>

              <div className="border p-3 flex items-center gap-4 justify-center lg:w-1/3 mx-auto rounded-xl mt-3">
                <p>Is this conversation helpful so far?</p>
                <div className="flex items-center gap-2">
                  <AiOutlineLike />
                  <AiOutlineDislike />
                  <RxCross1 />
                </div>
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#272727] hover:bg-[#3F3F3F] ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-2xl font-medium">
              How much does CineVerse cost?
            </div>
            <div className="collapse-content">
              <p className="text-xl text-justify ">
                CineVerse is entirely free for all users, providing access to
                explore movies, view details, manage favorites, and stay updated
                on releases. Enjoy a seamless movie experience without any
                subscription or hidden fees.
              </p>

              <div className="border p-3 flex items-center gap-4 justify-center lg:w-1/3 mx-auto rounded-xl mt-3">
                <p>Is this conversation helpful so far?</p>
                <div className="flex items-center gap-2">
                  <AiOutlineLike />
                  <AiOutlineDislike />
                  <RxCross1 />
                </div>
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#272727] hover:bg-[#3F3F3F] ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-2xl font-medium">
              Where Can I Watch ?
            </div>
            <div className="collapse-content">
              <p className="text-xl text-justify">
                CineVerse doesn’t host streaming services but helps you discover
                movies. You can watch them on platforms like Netflix, Amazon
                Prime, Disney+, or other streaming services where they are
                available.
              </p>

              <div className="border p-3 flex items-center gap-4 justify-center lg:w-1/3 mx-auto rounded-xl mt-3">
                <p>Is this conversation helpful so far?</p>
                <div className="flex items-center gap-2">
                  <AiOutlineLike />
                  <AiOutlineDislike />
                  <RxCross1 />
                </div>
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#272727] hover:bg-[#3F3F3F] ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-2xl font-medium">
              How Do I Cancel?
            </div>
            <div className="collapse-content">
              <p className="text-xl text-justify">
                Since CineVerse is free and requires no subscriptions, there’s
                nothing to cancel. Simply stop using the platform anytime
                without any obligations or fees—your experience is entirely
                hassle-free!
              </p>

              <div className="border p-3 flex items-center gap-4 justify-center lg:w-1/3 mx-auto rounded-xl mt-3">
                <p>Is this conversation helpful so far?</p>
                <div className="flex items-center gap-2">
                  <AiOutlineLike />
                  <AiOutlineDislike />
                  <RxCross1 />
                </div>
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#272727] hover:bg-[#3F3F3F] ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-2xl font-medium">
              What can I watch on Cineverse?
            </div>
            <div className="collapse-content">
              <p className="text-xl text-justify">
                On CineVerse, you can explore a vast collection of movies across
                genres like action, drama, sci-fi, animation, and more. Discover
                upcoming releases, classics, and trending films with detailed
                descriptions to enhance your movie-watching experience.
              </p>

              <div className="border p-3 flex items-center gap-4 justify-center lg:w-1/3 mx-auto rounded-xl mt-3">
                <p>Is this conversation helpful so far?</p>
                <div className="flex items-center gap-2">
                  <AiOutlineLike />
                  <AiOutlineDislike />
                  <RxCross1 />
                </div>
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#272727] hover:bg-[#3F3F3F] ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-2xl font-medium">
              Is Cineverse is good for kids?
            </div>
            <div className="collapse-content">
              <p className="text-xl text-justify">
                CineVerse is suitable for all ages, including kids, as it
                features movies from various genres. However, parents are
                encouraged to review movie ratings and descriptions to ensure
                content aligns with their children’s preferences and age
                appropriateness.
              </p>

              <div className="border p-3 flex items-center gap-4 justify-center lg:w-1/3 mx-auto rounded-xl mt-3">
                <p>Is this conversation helpful so far?</p>
                <div className="flex items-center gap-2">
                  <AiOutlineLike />
                  <AiOutlineDislike />
                  <RxCross1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
