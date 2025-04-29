import React from 'react';
import './teams.css';

const images = [
  "https://cdn.prod.website-files.com/63b84f92c44b245c68b5fb69/63b84f92c44b241fbfb5fb98_markerio.svg",
  "https://cdn.prod.website-files.com/63b84f92c44b245c68b5fb69/63b84f92c44b24f366b5fbcf_glitch%20logo.svg",
  "https://cdn.prod.website-files.com/63b84f92c44b245c68b5fb69/63b84f92c44b243a56b5fcbc_vanta%20logo.svg",
  "https://cdn.prod.website-files.com/63b84f92c44b245c68b5fb69/63b84f92c44b24609bb5fbe4_smith%20logo.svg",
  "https://cdn.prod.website-files.com/63b84f92c44b245c68b5fb69/63b84f92c44b2469c9b5fbf9_vtex%20logo.svg",
  "https://cdn.prod.website-files.com/63b84f92c44b245c68b5fb69/63b84f92c44b241fbfb5fb98_markerio.svg",
  "https://cdn.prod.website-files.com/63b84f92c44b245c68b5fb69/63b84f92c44b24f366b5fbcf_glitch%20logo.svg",
  "https://cdn.prod.website-files.com/63b84f92c44b245c68b5fb69/63b84f92c44b243a56b5fcbc_vanta%20logo.svg",
  "https://cdn.prod.website-files.com/63b84f92c44b245c68b5fb69/63b84f92c44b24609bb5fbe4_smith%20logo.svg",
  "https://cdn.prod.website-files.com/63b84f92c44b245c68b5fb69/63b84f92c44b2469c9b5fbf9_vtex%20logo.svg",
  "https://cdn.prod.website-files.com/63b84f92c44b245c68b5fb69/63b84f92c44b241fbfb5fb98_markerio.svg",
  "https://cdn.prod.website-files.com/63b84f92c44b245c68b5fb69/63b84f92c44b24f366b5fbcf_glitch%20logo.svg",
  "https://cdn.prod.website-files.com/63b84f92c44b245c68b5fb69/63b84f92c44b243a56b5fcbc_vanta%20logo.svg",
  "https://cdn.prod.website-files.com/63b84f92c44b245c68b5fb69/63b84f92c44b24609bb5fbe4_smith%20logo.svg",
  "https://cdn.prod.website-files.com/63b84f92c44b245c68b5fb69/63b84f92c44b2469c9b5fbf9_vtex%20logo.svg"
];

function TrustedBy() {
  return (
   <div className="w-full bg-[#0D172A] pt-6 md:pt-12 pb-12">

      <div className="text-center text-3xl text-[#A3D7FF] mb-8">
        Trusted by thousands of teams
      </div>

      <div className="overflow-hidden">
        <div className="flex animate-marquee">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index + 1}`}
              className="common_logos_image mx-8 w-[120px] h-auto"
            />
          ))}
        </div>
      </div>

      <div className="w-3xl mx-auto mt-8">
  <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
</div>

    </div>
  );
}

export default TrustedBy;
