import React from "react";
import image1 from "../images/prodat-blog.png";
import image2 from "../images/ProdatEdu Logo.png";

export default function Services() {
  return (
    <section class="md:h-full flex items-center text-gray-600">
        <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-12">
                <h5 class="text-base md:text-lg text-indigo-700 mb-1" style={{color: "#db2877"}}>Why Us?</h5>
                <h1 class="text-4xl md:text-6xl text-gray-700 font-semibold">The Power of <span style={{color: "#ffa500"}}>Effective</span> and <span style={{color: "#db2877"}}>Collaborative</span> Revision</h1>
            </div>
            <div class="flex flex-wrap -m-4">
                <div class="p-4 sm:w-1/2 lg:w-1/3">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                            src={image1} alt="blog"></img>
                        <div class="p-6 hover:bg-pink-700 hover:text-white transition duration-300 ease-in">
                            <h1 class="text-2xl font-semibold mb-3">Prodat Blog</h1>
                            <p class="leading-relaxed mb-3">Review high-yield IGCSE knowledge using our notes on prodatblog.com!</p>
                            <div class="flex items-center flex-wrap ">
                                <a href="https://prodatblog.com/" class="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0">Prodat Blog
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                        <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="https://picsum.photos/id/1011/720/400"alt="blog"></img>
                        <div class="p-6 hover:bg-pink-700 hover:text-white transition duration-300 ease-in">
                            <h1 class="text-2xl font-semibold mb-3">Prodat Web</h1>
                            <p class="leading-relaxed mb-3">Build or find a learning community that supports you!</p>
                            <div class="flex items-center flex-wrap ">
                                <a href="http://prodatweb.com/" class="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0">Prodat Web
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                        <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                            src={image2} alt="blog"></img>
                        <div class="p-6 hover:bg-pink-700 hover:text-white transition duration-300 ease-in">
                            <h1 class="text-2xl font-semibold mb-3">Prodat Edu</h1>
                            <p class="leading-relaxed mb-3">The ultimate revision tool with a built in active recall algorithm to maximise knowledge retainment.</p>
                            <div class="flex items-center flex-wrap ">
                                <a href="https://picsum.photos/id/1011/720/400" class="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0">Prodat Edu Coming Soon
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  );
}
