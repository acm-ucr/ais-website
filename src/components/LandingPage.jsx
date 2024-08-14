// import React from "react";
// import Image from "next/image";
// import aboutLanding from "@/public/aboutLanding.svg";
// // import Wave from "@/public/wave.svg";
// // import Wave1 from "@/public/wave1.svg";
// // import Wave2 from "@/public/wave2.svg";
// // import conditional from "@/components/conditional.tsx"

// const LandingPage = ({ initialHeader }) => {
//   const [activePage, setActivePage] = useState("about");

//   // Define a mapping of page names to images and headers
//   const pageConfig = {
//     board: { image: boardLanding, header: "Board" },
//     about: { image: aboutLanding, header: "About Us" },
//     events: { image: eventsLanding, header: "Events" },
//     alumni: { image: alumniLanding, header: "Alumni" },
//     resources: { image: resourcesLanding, header: "Resources" },
//   };

//   // Get the current image and header based on the active page
//   // const { image, header } = pageConfig[activePage];

//   return (
//     <div className="relative">
//       <div className="absolute inset-0 z-10 flex items-center justify-center text-4xl font-bold text-white">
//         {header}
//       </div>
//       <div className="relative h-screen bg-gradient-to-b from-ais-blue-100 via-ais-blue-200 to-ais-blue-300">
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           <Image className="w-full" src={image} alt={`${header} Wave`} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
