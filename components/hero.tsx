import React from 'react'
import { Spotlight } from './ui/spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/magic-button'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
            <Spotlight className="top-40 left-80 h-[80vh] w-[50vw]" fill="blue"/>
        </div>
        <div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#2d2f80_0%,_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#3b1679_0%,_transparent_70%)]" />
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        
        <div className="flex justify-center relative my-20 z-10">
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className="uppercase tracking-widest text-sx text-center text-blue-100 max-w-100">
                    A Portfolio website built on next.js
                </h2>
                <div className="text-center text-[60px] md:text-5xl lg:text-6xl">
                    <TextGenerateEffect words="Welcome to My Portfolio" />
                    <div className="text-[36px]">
                        <TextGenerateEffect words="My Journey as a Software Developer" />
                    </div>
                </div>
                <p className="text-center">
                    Hi, I&apos;m Jien, a Software Developer based in United States
                </p>

                <a href="#about">
                    <MagicButton
                        title="Show My Work"
                        icon={<FaLocationArrow/>}
                        position="right"
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero
