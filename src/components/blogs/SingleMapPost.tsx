import Link from 'next/link';
import React from 'react'

interface SingleMapPostProps {
    blog: any;
}
const SingleMapPost: React.FC<SingleMapPostProps> = ({ blog }) => {
    const slug = `/blog/${blog.title.split(' ').join('-').toLowerCase()}`;

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50 p-4 shadow-xl border border-gray-700 rounded-xl cursor-pointer">
      <Link href="/blogs/[slug]" as={slug}>
        <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
      </Link>
      <p>{blog.description}</p>
    </div>
  );
}

export default SingleMapPost