import React from 'react'
import Image from 'next/image'

const Aivideo = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/footer-video-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Single Image at Bottom Center */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
                <Image
                    src="/images/Home/ai-image.png"
                    alt="AI and Human"
                    width={1200}
                    height={600}
                    className="w-[100vw] h-auto object-contain"
                    priority
                />
            </div>
        </div>
    )
}

export default Aivideo
