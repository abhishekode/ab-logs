import React from 'react'
import SingleMapPost from './SingleMapPost'

const Blogs = () => {
  const blogs = [
    { title: 'Blog 1', description: 'Description 1' },
    { title: 'Blog 2', description: 'Description 2' },
    { title: 'Blog 3', description: 'Description 3' },
    { title: 'Blog 4', description: 'Description 4' },
    { title: 'Blog 5', description: 'Description 5' },
  ]

  return (
    <div className="max-w-7xl mx-auto lg:py-24 py-10">
      <div className="py-8 text-center">
        <h1 className="text-2xl font-bold text-blue-600">OUR BLOG</h1>
        <p>Read Our Latest Posts</p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {blogs.map((blog, index) => (
          <SingleMapPost key={index} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export default Blogs