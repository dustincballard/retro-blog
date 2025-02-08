import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import BlogPost from './components/BlogPost'
import BlogPostPage from './components/BlogPostPage'

const posts = [
  {
    title: "The Art of Skeumorphism",
    date: "JULY 2023",
    excerpt: "Exploring the design philosophy that mimics real-world objects in digital interfaces. From subtle shadows to textured surfaces, we dive deep into what makes interfaces feel tangible."
  },
  {
    title: "Neo-Brutalism: Raw & Unfiltered",
    date: "JUNE 2023",
    excerpt: "Breaking down the principles of neo-brutalist web design. High-contrast, raw typography, and intentionally broken layouts - discover why designers are embracing the chaos."
  },
  {
    title: "Lo-fi Aesthetics in Modern Web",
    date: "MAY 2023",
    excerpt: "How lo-fi design creates authentic and nostalgic user experiences. Imperfect elements, analog textures, and the beauty of designed imperfection in digital spaces."
  }
]

function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6">
      {posts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </main>
  )
}

export default function App() {
  return (
    <div className="min-h-screen pb-12">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<BlogPostPage />} />
      </Routes>
    </div>
  )
}
