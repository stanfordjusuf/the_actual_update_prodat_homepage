import React from "react";
import pic1 from "../images/profPic1.png";
import pic2 from "../images/profPic2.png";
import pic3 from "../images/profPic3.png";
import pic4 from "../images/profPic4.png";
import pic5 from "../images/profPic5.png";
import pic6 from "../images/profPic6.png";
import pic7 from "../images/1.png";
import pic8 from "../images/2.png";
import pic9 from "../images/3.png";

export default function Features() {
  return (
    <div>
    <section class="md:h-full flex items-center text-gray-600">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-12">
          <h5
            class="text-base md:text-lg text-indigo-700 mb-1"
            style={{ color: "#db2877" }}
          >
            Our Expertise?
          </h5>
          <h1 class="text-4xl md:text-6xl text-gray-700 font-semibold">
            Learn <span style={{ color: "#ffa500" }}>Physics</span> ,{" "}
            <span style={{ color: "#db2877" }}>Accounting</span> and <span style={{ color: "#ffa500" }}>Computer Science</span> from Top Scoring Students!
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 sm:w-1/2 lg:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-72 md:h-48 w-full object-cover object-center"
                src={pic1}
                alt="blog"
              ></img>
              <div class="p-6 hover:bg-pink-700 hover:text-white transition duration-300 ease-in">
                <h1 class="text-2xl font-semibold mb-3">Maxwell</h1>
                <p class="leading-relaxed mb-3">
                  "Hi! I'm Max and I will guide you through physics by sharing some tips and tricks I used to score well in my IGCSE."
                </p>
                <div class="flex items-center flex-wrap ">
                  <a
                    href="https://prodatblog.com/category/physics"
                    class="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Founder and Full Stack Developer
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-72 md:h-48 w-full object-cover object-center"
                src={pic3}
                alt="blog"
              ></img>
              <div class="p-6 hover:bg-pink-700 hover:text-white transition duration-300 ease-in">
                <h1 class="text-2xl font-semibold mb-3">Elysia</h1>
                <p class="leading-relaxed mb-3">
                  "Greetings! I'm Elysia ^u^ I'll be guiding you throughout your IGCSE Accounting Journey in Prodat! If there are any topics in between chapters you think I should cover, please let me know in the comments."
                </p>
                <div class="flex items-center flex-wrap ">
                  <a
                    href="https://prodatblog.com/category/accounting"
                    class="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Web Content Manager
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-72 md:h-48 w-full object-cover object-center"
                src={pic2}
                alt="blog"
              ></img>
              <div class="p-6 hover:bg-pink-700 hover:text-white transition duration-300 ease-in">
                <h1 class="text-2xl font-semibold mb-3">Stanford</h1>
                <p class="leading-relaxed mb-3">
                  "Hello there! I'm Stanford and I hope you can review CS effectively using my 'magic' review questions on Prodat Blog."
                </p>
                <div class="flex items-center flex-wrap ">
                  <a
                    href="https://prodatblog.com/category/computer-science"
                    class="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Prodat Full Stack Developer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="md:h-full flex items-center text-gray-600">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-12">
          <h5
            class="text-base md:text-lg text-indigo-700 mb-1"
            style={{ color: "#db2877" }}
          >
            Is that it?
          </h5>
          <h1 class="text-4xl md:text-6xl text-gray-700 font-semibold">
            IGCSE <span style={{ color: "#ffa500" }}>Resources</span> ,Practical
            <span style={{ color: "#db2877" }}> Tips</span> and <span style={{ color: "#ffa500" }}>Tricks</span>.
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 sm:w-1/2 lg:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-72 md:h-48 w-full object-cover object-center"
                src={pic5}
                alt="blog"
              ></img>
              <div class="p-6 hover:bg-pink-700 hover:text-white transition duration-300 ease-in">
                <h1 class="text-2xl font-semibold mb-3">Isaac</h1>
                <p class="leading-relaxed mb-3">
                "Hi there. I'm Isaac and I'm Prodat's moderator and a member of the marketing team. On top of moderating and marketing, I'll also be providing you guys with IGCSE and IB tips and tricks so you can improve your scores."
                </p>
                <div class="flex items-center flex-wrap ">
                  <a
                    href="https://prodatblog.com/category/igcse-tips"
                    class="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Head of Development
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-72 md:h-48 w-full object-cover object-center"
                src={pic4}
                alt="blog"
              ></img>
              <div class="p-6 hover:bg-pink-700 hover:text-white transition duration-300 ease-in">
                <h1 class="text-2xl font-semibold mb-3">Matthew</h1>
                <p class="leading-relaxed mb-3">
                "Hi there! My name is Matt and through Prodat, I hope you will find my insights into Global Perspectives and how to enjoy yourself during your IGCSE journey!"
                </p>
                <div class="flex items-center flex-wrap ">
                  <a
                    href="https://prodatblog.com/category/igcse-tips"
                    class="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Head of Marketing
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-72 md:h-48 w-full object-cover object-center"
                src={pic6}
                alt="blog"
              ></img>
              <div class="p-6 hover:bg-pink-700 hover:text-white transition duration-300 ease-in">
                <h1 class="text-2xl font-semibold mb-3">Prodat Team</h1>
                <p class="leading-relaxed mb-3">
                  "We will support you at every step to make your IGCSE journey a memorable one."
                </p>
                <div class="flex items-center flex-wrap ">
                  <a
                    href="https://prodatblog.com/category/igcse-tips"
                    class="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Check out more
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="md:h-full flex items-center text-gray-600">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-12">
          <h5
            class="text-base md:text-lg text-indigo-700 mb-1"
            style={{ color: "#db2877" }}
          >
            Our flagship service - Prodat Web
          </h5>
          <h1 class="text-4xl md:text-6xl text-gray-700 font-semibold">
            Find a <span style={{ color: "#ffa500" }}>Supportive</span> and
            <span style={{ color: "#db2877" }}> Caring</span> Community of <span style={{ color: "#ffa500" }}>Leaners</span>.
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 sm:w-1/2 lg:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-72 md:h-48 w-full object-cover object-center"
                src={pic7}
                alt="blog"
              ></img>
              <div class="p-6 hover:bg-pink-700 hover:text-white transition duration-300 ease-in">
                <h1 class="text-2xl font-semibold mb-3">Safe</h1>
                <p class="leading-relaxed mb-3">
                  Our moderators are quick to delete any offensive comments and ban trolls.
                </p>
                <div class="flex items-center flex-wrap ">
                  <a
                    href="http://prodatweb.com/"
                    class="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Your safety is our top priority
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-72 md:h-48 w-full object-cover object-center"
                src={pic8}
                alt="blog"
              ></img>
              <div class="p-6 hover:bg-pink-700 hover:text-white transition duration-300 ease-in">
                <h1 class="text-2xl font-semibold mb-3">Functional</h1>
                <p class="leading-relaxed mb-3">
                  Use our built in features to make learning memorable with your community.
                </p>
                <div class="flex items-center flex-wrap ">
                  <a
                    href="http://prodatweb.com/"
                    class="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Find out more
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-72 md:h-48 w-full object-cover object-center"
                src={pic9}
                alt="blog"
              ></img>
              <div class="p-6 hover:bg-pink-700 hover:text-white transition duration-300 ease-in">
                <h1 class="text-2xl font-semibold mb-3">Connection</h1>
                <p class="leading-relaxed mb-3">
                  We continually strive to make online communities more authentic and real on Prodat Web.
                </p>
                <div class="flex items-center flex-wrap ">
                  <a
                    href="http://prodatweb.com/"
                    class="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Find your tribe now
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
