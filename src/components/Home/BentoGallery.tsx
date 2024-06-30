import Image from 'next/image';
import React from 'react'

const BentoGallery = () => {
  const imagePaths = [
    "/images/hori-crystal.jpeg",
    "/images/hori-crystal1.jpeg",
    "/images/hori-crystal-img1.jpeg",
    "/images/hori-crystal-img3.jpeg",
    "/images/hori-crystal-img5.jpeg",
    "/images/horiz.jpeg",
    "/images/horiz-1.jpeg",
    "/images/horiz-crystal1.jpeg",
    "/images/horizon-1.jpeg",
    "/images/horizontal-cry1.jpeg",
    "/images/rahul-p-dev.png",
    "/images/vertical-1.jpeg",
    "/images/verti-crystal-img2.jpeg",
    "/images/verti-crystal-img4.jpeg",
    "/images/verti-crystal-img6.jpeg",
    "/images/verti-crystal-img7.jpg"
  ];

  return (
    <div className='max-w-6xl mx-auto h-full py-20'>
      <div className="">
        <p className='text-3xl text-center py-5'>Our Gallery, Some Memories</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {imagePaths.map((img, i) => (
          <div className="h-[400px] overflow-hidden" key={i}>
            <Image
              className="max-w-full rounded-lg object-cover object-center h-full cursor-pointer transition-transform hover:scale-125 hover:shadow-md duration-500 ease-in-out"
              src={img}
              alt={`new-ben${i}`}
              height={400}
              width={400}
            />

          </div>
        ))}
      </div>
    </div>
  )
}

export default BentoGallery