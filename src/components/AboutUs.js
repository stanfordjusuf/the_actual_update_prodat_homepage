import React from "react";

export default function AboutUs() {
  return (
    <div class="grid place-items-center min-h-screen">
      <div class="p-4 max-w-5xl grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6">
        <h1 class="text-4xl font-extrabold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3 lg:text-6xl">
          <span class="md:col-span-2">Checkout what others are saying about Prodat.</span>
        </h1>
        <p class="xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg">
          Here are just a few from our beloved users.
        </p>
        <div style={{backgroundColor: "#ffa500"}} class="h-16 bg-blue-500 xs:h-auto xs:square">Review #1</div>
        <div style={{backgroundColor: "#ffa500"}} class="h-16 bg-blue-500 xs:h-auto xs:square">Review #2</div>
        <div style={{ backgroundColor: "#db2877" }} class="h-16 bg-pink-500 xs:h-auto xs:square">Review #3</div>
        <div style={{backgroundColor: "#ffa500"}} class="h-16 bg-blue-500 xs:h-auto xs:square md:col-start-2">Review #4</div>
        <div style={{ backgroundColor: "#db2877" }} class="h-16 bg-pink-500 xs:h-auto xs:square">Review #5</div>
        <div style={{backgroundColor: "#ffa500"}} class="h-16 bg-blue-500 xs:h-auto xs:square">Review #6</div>
        <div style={{backgroundColor: "#ffa500"}} class="h-16 bg-blue-500 xs:h-auto xs:square">Review #7</div>
        <div style={{ backgroundColor: "#db2877" }} class="h-16 bg-pink-500 xs:h-auto xs:square">Review #8</div>
        <p class="self-center md:text-lg md:col-span-2 md:text-center md:px-4">
          Not convinced yet? Scroll down to see what makes Prodat different from others.
        </p>
      </div>
    </div>
  );
}
