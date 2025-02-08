import React from 'react'

export default function BlogContent() {
  return (
    <article className="bg-[#fffdf8] p-8 border-4 border-black shadow-brutal">
      <div className="max-w-2xl mx-auto">
        {/* Handdrawn-style header */}
        <div className="bg-yellow-100 -rotate-1 p-6 border-2 border-black mb-8 shadow-brutal">
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'courier' }}>
            The Art of Skeumorphism
          </h1>
          <div className="flex items-center gap-4">
            <span className="bg-blue-200 px-3 py-1 border-2 border-black rotate-2">July 2023</span>
            <span className="bg-pink-200 px-3 py-1 border-2 border-black -rotate-1">☕ 5 min read</span>
          </div>
        </div>

        {/* Featured image with polaroid effect */}
        <div className="bg-white p-4 border-2 border-black rotate-1 shadow-brutal mb-12">
          <div className="bg-gray-200 h-64 border border-black"></div>
          <p className="text-center mt-2 font-bold" style={{ fontFamily: 'courier' }}>
            Fig 1. Design Evolution
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 bg-green-200 inline-block px-4 border-2 border-black transform -rotate-1">
              Introduction
            </h2>
            <p className="leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <blockquote className="border-l-4 border-black pl-4 my-6 bg-blue-100 p-4 rotate-1 shadow-brutal">
              "Design is not just what it looks like and feels like. Design is how it works."
              <footer className="mt-2 font-bold">- Steve Jobs</footer>
            </blockquote>
          </section>

          {/* Post-it note style section */}
          <section className="bg-yellow-200 p-6 border-2 border-black rotate-1 shadow-brutal">
            <h3 className="text-xl font-bold mb-3 underline">Key Takeaways:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Skeumorphism brings familiarity</li>
              <li>Digital interfaces mimic physical objects</li>
              <li>Balance between realism and usability</li>
            </ul>
          </section>

          {/* Code snippet section */}
          <section className="bg-gray-100 p-6 border-2 border-black -rotate-1 font-mono text-sm shadow-brutal">
            <div className="bg-black text-green-400 p-4">
              <code>
                .skeumorphic-button {<br/>
                &nbsp;&nbsp;box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);<br/>
                &nbsp;&nbsp;background: linear-gradient(to bottom, #f0f0f0, #d3d3d3);<br/>
                &nbsp;&nbsp;border: 1px solid #999;<br/>
                &nbsp;&nbsp;border-radius: 4px;<br/>
                }
              </code>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 bg-purple-200 inline-block px-4 border-2 border-black transform rotate-1">
              Conclusion
            </h2>
            <p className="leading-relaxed">
              Nulla facilisi. Mauris vel lorem sit amet quam facilisis tincidunt. Integer vitae justo eget magna fermentum iaculis. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>
        </div>

        {/* Author card */}
        <div className="mt-12 bg-white p-6 border-2 border-black shadow-brutal rotate-1">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full border-2 border-black"></div>
            <div>
              <h4 className="font-bold">Written by RetroWriter</h4>
              <p className="text-gray-600">Design enthusiast & coffee addict</p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          <span className="bg-red-200 px-3 py-1 border-2 border-black rotate-1">#design</span>
          <span className="bg-green-200 px-3 py-1 border-2 border-black -rotate-1">#skeumorphism</span>
          <span className="bg-blue-200 px-3 py-1 border-2 border-black rotate-2">#interface</span>
        </div>
      </div>
    </article>
  )
}
