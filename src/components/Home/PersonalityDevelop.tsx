import Image from 'next/image'
import React from 'react'

const PersonalityDevelop = () => {
    const focus = {
        title: "Personality Development",
        subTitle: "Personality gives you an edge over others",
        focusOn: "To help you succeed in life",
        description: "We develop personality and leadership skills in Kids, teenagers and adults (youth, homemakers, working professionals, Air hostess )",
        keyPoints: [
            "Personality Enrichment",
            "Communication skills",
            "Leadership skills",
            "Body language",
            "Image consulting",
            "Public speaking",
            "Client Handling",
            "Etiquettes and protocol",
            "Fine dining and high tea etiquette",
            "smart work Life Balance",
            "Effective Home Management",
            "Career Planning",
            "Role Play",
        ]
    }


    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image className="object-cover object-center rounded" alt="hero" src="/images/rahul-p-dev.png" height={720} width={600} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start items-center">
                        <h1 className="text-left text-stone-900 font-semibold">{focus.title}</h1>
                        <h2 className="title-font text-3xl font-medium text-gray-900 pb-3">{focus.subTitle} </h2>
                        <p className="mb-3 leading-relaxed">{focus.description}</p>
                        <ul className='py-4 list-disc md:ml-10'>
                            {focus.keyPoints.map((keyPoint, i) => (
                                <li key={i} className="">{keyPoint}</li>
                            ))}
                        </ul>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default PersonalityDevelop