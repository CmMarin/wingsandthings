import svgPaths from "./svg-g2ooigeqr6";
import imgDarkGrittyFireBackground from "./724f310f69c16edffcbf47098e2b2ffabb50e682.png";
import { ImageWithFallback } from "../../app/components/figma/ImageWithFallback";

function DarkGrittyFireBackground() {
  return (
    <div className="absolute inset-0 opacity-30" data-name="Dark gritty fire background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute inset-0 h-full w-full object-cover object-center scale-[1.08]" src={imgDarkGrittyFireBackground} />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[256px]" data-name="888">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256 256">
        <g clipPath="url(#clip0_1_68)" id="888">
          <path d="M256 0H0V256H256V0Z" fill="var(--fill-0, #1A1A1A)" id="Vector" />
          <path d={svgPaths.p83ca000} fill="var(--fill-0, #888888)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_68">
            <rect fill="white" height="256" width="256" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// function Component888Fill() {
//   return (
//     <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[256px]" data-name="888 fill">
//       <Component />
//     </div>
//   );
// }

// function Spices() {
//   return (
//     <div className="absolute blur-[2px] bottom-[47.62%] content-stretch flex flex-col items-start left-[40px] max-w-[1920px] mix-blend-screen opacity-20 overflow-clip rounded-[9999px] top-1/4 w-[256px]" data-name="Spices">
//       <Component888Fill />
//     </div>
//   );
// }

// function Component1() {
//   return (
//     <div className="relative shrink-0 size-[320px]" data-name="888">
//       <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 320">
//         <g clipPath="url(#clip0_1_61)" id="888">
//           <path d="M320 0H0V320H320V0Z" fill="var(--fill-0, #1A1A1A)" id="Vector" />
//           <path d={svgPaths.p2088efc0} fill="var(--fill-0, #888888)" id="Vector_2" />
//         </g>
//         <defs>
//           <clipPath id="clip0_1_61">
//             <rect fill="white" height="320" width="320" />
//           </clipPath>
//         </defs>
//       </svg>
//     </div>
//   );
// }

// function Component888Fill1() {
//   return (
//     <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[320px]" data-name="888 fill">
//       <Component1 />
//     </div>
//   );
// }

// function Peppers() {
//   return (
//     <div className="absolute blur-[2px] bottom-1/4 content-stretch flex flex-col items-start max-w-[1920px] mix-blend-screen opacity-20 overflow-clip right-[40px] rounded-[9999px] top-[40.78%] w-[320px]" data-name="Peppers">
//       <Component888Fill1 />
//     </div>
//   );
// }

function Svg() {
  return (
    <div className="absolute bottom-[40px] h-[30px] left-[49.22%] opacity-50 overflow-clip right-[49.22%]" data-name="SVG">
      <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[35.75%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 9.275">
          <path d={svgPaths.p17f62080} fill="var(--fill-0, #FF4500)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 z-20" data-name="Heading 2">
      <div className="flex flex-col font-['Teko'] font-bold justify-center relative shrink-0 text-[#ff4500] text-sm sm:text-2xl md:text-5xl text-center tracking-[0.14em] uppercase whitespace-normal sm:whitespace-nowrap max-w-[18rem] sm:max-w-none leading-tight mb-6 px-3">
        <span className="bg-black/60 px-4 py-2 border-2 border-[#ff4500]/50 backdrop-blur-sm">Craft Beer | Hot wings | Good company</span>
      </div>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Heading 2:margin">
      <Heading1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex flex-col items-center relative w-full mb-4 md:-mb-2" data-name="Container">
      <h1 className="font-['Anton'] text-[45px] sm:text-[80px] md:text-[180px] leading-none text-white tracking-tight uppercase text-center drop-shadow-2xl">
        Hottest Wings
      </h1>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex flex-col items-center relative w-full mb-2" data-name="Container">
      <h1 className="font-['Anton'] text-[45px] sm:text-[80px] md:text-[180px] leading-none text-[#ff4500] tracking-tight uppercase text-center drop-shadow-2xl mix-blend-screen opacity-90 inline-block relative">
        in Chișinău
        <div className="absolute top-[60%] left-0 w-full h-[6px] bg-[#ff4500] rotate-[-2deg] opacity-70 z-[-1]" />
      </h1>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full flex flex-col items-center z-10" data-name="Heading 1">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Heading1Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0" data-name="Heading 1:margin">
      <Heading />
    </div>
  );
}

function Container3() {
  return null;
}

function Margin() {
  return null;
}

function Container5() {
  return (
    <div className="flex flex-col items-center relative z-20" data-name="Container">
      <button
        type="button"
        onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" })}
        className="px-8 py-4 sm:px-10 sm:py-5 bg-[#ff4500] hover:bg-[#ff1a1a] text-black font-['Teko'] text-2xl sm:text-3xl font-bold uppercase tracking-wider transform hover:-translate-y-1 transition-all shadow-[8px_8px_0px_#000] border-2 border-black hover:shadow-[12px_12px_0px_#000]"
      >
        View Menu
      </button>
    </div>
  );
}

function ContainerCssTransform() {
  return (
    <div className="h-[37.7px] relative shrink-0" data-name="Container:css-transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start justify-center pb-[2.494px] pt-[2.491px] relative">
        <div className="flex h-[33.288px] items-center justify-center relative shrink-0 w-[127.587px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none scale-y-98 skew-x-[11.75deg]">
            <Container5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p10972580} fill="var(--fill-0, #FF4500)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon() {
  return (
    <div className="content-stretch flex flex-col items-start relative" data-name="iconify-icon">
      <Svg1 />
    </div>
  );
}

function IconifyIconCssTransform() {
  return (
    <div className="h-[37.7px] relative shrink-0" data-name="iconify-icon:css-transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start justify-center pb-[6.583px] pt-[6.581px] relative">
        <div className="flex h-[23.498px] items-center justify-center relative shrink-0 w-[28.885px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none scale-y-98 skew-x-[11.75deg]">
            <IconifyIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#141414] content-stretch flex gap-[6.048px] items-center pl-[38.596px] pr-[39.452px] py-[20px] relative" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#ff4500] border-solid inset-0 pointer-events-none" />
      <ContainerCssTransform />
      <IconifyIconCssTransform />
    </div>
  );
}

function Link() {
  return (
    <div className="relative self-stretch shrink-0 w-[242px]" data-name="Link">
      <div className="absolute flex inset-[8px_-16.08px_-8px_-0.07px] items-center justify-center">
        <div className="-skew-x-12 flex-none h-[77.7px] scale-y-98 w-[242px]">
          <div className="bg-[#ff4500] size-full" data-name="Background" />
        </div>
      </div>
      <div className="absolute flex h-[76.002px] items-center justify-center left-[-8.07px] top-0 w-[256.724px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "42" } as React.CSSProperties}>
        <div className="-skew-x-12 flex-none scale-y-98">
          <BackgroundBorder />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex items-center justify-center relative shrink-0 w-[129.285px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none scale-x-96">
            <div className="flex flex-col font-['Anton:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[#d1d5db] text-[25.1px] text-center tracking-[2.5061px] uppercase whitespace-nowrap">
              <p className="leading-[33.415px]">Our Sauces</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[22.494px] pl-[38.596px] pr-[38.592px] pt-[22.491px] relative" data-name="Border">
      <div aria-hidden="true" className="absolute border-2 border-[#4b5563] border-solid inset-0 pointer-events-none" />
      <div className="flex h-[33.288px] items-center justify-center relative shrink-0 w-[136.206px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none scale-y-98 skew-x-[11.75deg]">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative self-stretch shrink-0 w-[214.53px]" data-name="Link">
      <div className="absolute flex h-[76.563px] items-center justify-center left-[-8.19px] top-0 w-[229.668px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-skew-x-12 flex-none scale-y-98">
          <Border />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_24px] h-[76px] items-start justify-center relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1024px] px-[16px] relative shrink-0 z-20" data-name="Container">
      <Heading2Margin />
      <Heading1Margin />
      <Margin />
      <div className="flex flex-col items-center justify-center pt-2 relative z-20">
        <Container5 />
      </div>
    </div>
  );
}

export default function HeaderHeroSection() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[80px] relative size-full z-10" data-name="Header - HERO SECTION">
      <DarkGrittyFireBackground />
      <div className="absolute bg-[#0a0a0a] mix-blend-multiply opacity-50 inset-0 z-0 pointer-events-none" />
      <div className="absolute bg-gradient-to-t from-[#0a0a0a] from-10% via-[#0a0a0a]/50 via-50% to-[#0a0a0a]/80 to-90% inset-0 z-0 pointer-events-none" data-name="Gradient" />
      
      {/* Decorative brand images to add depth to atmosphere */}
      <div className="hidden md:block absolute left-[5%] top-[15%] w-64 h-64 rounded-full overflow-hidden opacity-30 mix-blend-screen scale-[1.2] -rotate-6 pointer-events-none z-0 blur-[2px] saturate-150 contrast-125">
        <ImageWithFallback
          src={"https://images.unsplash.com/photo-1593214932660-b9564b1924ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMGNoaWNrZW4lMjB3aW5ncyUyMHJlc3RhdXJhbnQlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzU2NjcxODN8MA&ixlib=rb-4.1.0&q=80&w=1080"}
          alt="Decorative wings"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="hidden md:block absolute right-[5%] bottom-[20%] w-72 h-72 rounded-full overflow-hidden opacity-30 mix-blend-screen scale-[1.5] rotate-12 pointer-events-none z-0 blur-sm saturate-200 contrast-150 brightness-75">
        <ImageWithFallback
          src={"https://images.unsplash.com/photo-1684253643886-579c329dcd07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcGljeSUyMGNoaWNrZW4lMjB3aW5ncyUyMHJlc3RhdXJhbnQlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzU2NjcxODN8MA&ixlib=rb-4.1.0&q=80&w=1080"}
          alt="Decorative wings"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* <div className="absolute bottom-[88px] flex flex-col font-['Teko'] font-bold justify-center leading-none left-1/2 -translate-x-1/2 right-auto opacity-70 text-[#ff4500] text-xl tracking-[0.3em] uppercase z-20">
        <span className="bg-black border border-[#ff4500]/30 px-6 py-2 shadow-[4px_4px_0px_#ff4500]">Scroll or Die</span>
      </div> */}
      
      <div className="z-10 relative flex flex-col items-center justify-center">
        <Container />
      </div>
    </div>
  );
}