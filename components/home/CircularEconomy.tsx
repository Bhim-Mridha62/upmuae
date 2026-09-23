import React from "react";

function WasteCollectionIcon() {
  return (
    <svg
      viewBox="0 0 64 52"
      width="72"
      height="58"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 19.5H21M4 19.5L6.5 46.5H16L18.5 19.5" />
        <path d="M7.5 25.5V42M11.2 25.5V42M15 25.5V42" opacity="0.9" />
        <path d="M2.5 19.5C2.5 16.5 5 15.2 8 17.2C11 19.2 13.5 18 16 16.2C18.5 14.4 21 16 21 19.5" />
        <path
          d="M5 11.5L7 18M9.5 10L11.5 18M14 11.5L15.5 18"
          strokeWidth="1.15"
        />
        <circle cx="36.5" cy="9" r="4.2" />
        <path d="M36.5 13.2V28.5M36.5 16.8L26.5 23.5M36.5 18.5L45 21.5" />
        <path d="M36.5 28.5L28.5 45M36.5 28.5L44 45" />
      </g>
    </svg>
  );
}

function ProcessingIcon() {
  return (
    <svg
      viewBox="0 0 72 44"
      width="76"
      height="46"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 16H22M4 16V8.5C4 6.5 6 5 10.5 5H16C19.5 5 22 6.5 22 8.5V16" />
        <path d="M6 11.5H20M4 16V24.5M22 16V24.5" />
        <path d="M3.5 24.5V32.5H25.5V24.5" />
        <path d="M7 28.5H11M15 28.5H19M7 32.5H11M15 32.5H19" opacity="0.85" />
        <path d="M22 10.5H34V14.5H38.5V8H34" />
        <path d="M38.5 14.5V24" />
        <ellipse cx="47" cy="24.5" rx="8.5" ry="3.2" />
        <path d="M38.5 24.5V34.5C38.5 36.8 42 38.5 47 38.5C52 38.5 55.5 36.8 55.5 34.5V24.5" />
        <ellipse cx="47" cy="34.5" rx="8.5" ry="3.2" opacity="0.95" />
      </g>
    </svg>
  );
}

function RecycledProductIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 1792 1728"
    >
      <path d="M0 0h1792v1728H0z" fill="none" />
      <path
        fill="currentColor"
        d="m836 1169l-15 368l-2 22l-420-29q-36-3-67-31.5t-47-65.5q-11-27-14.5-55t4-65t12-55t21.5-64t19-53q78 12 509 28M449 583l180 379l-147-92q-63 72-111.5 144.5t-72.5 125t-39.5 94.5t-18.5 63l-4 21L46 961q-17-26-18-56t6-47l8-18q35-63 114-188L16 566zm1231 517l-188 359q-12 29-36.5 46.5T1412 1526l-18 4q-71 7-219 12l8 164l-230-367l211-362l7 173q170 16 283 5t170-33zM895 176q-47 63-265 435L313 424l-19-12L519 56q20-31 60-45t80-10q24 2 48.5 12t42 21T791 67t36 34.5t36 39.5t32 35m655 307l212 363q18 37 12.5 76t-27.5 74q-13 20-33 37t-38 28t-48.5 22t-47 16t-51.5 14t-46 12q-34-72-265-436l313-195zm-143-226l142-83l-220 373l-419-20l151-86q-34-89-75-166t-75.5-123.5t-64.5-80T799 25l-17-13l405 1q31-3 58 10.5t39 28.5l11 15q39 61 112 190"
      />
    </svg>
  );
}

function ReuseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 3.723A9.003 9.003 0 0 0 2.124 14M9 3.723L6 2.5m3 1.223L8 6.5m11.064 10a8.96 8.96 0 0 0 .936-4c0-4.46-3.243-8.161-7.5-8.876M19.064 16.5l2.936-2m-2.936 2l-1.564-3m-13.984 4a8.99 8.99 0 0 0 7.484 4a8.97 8.97 0 0 0 6-2.292M3.516 17.5H7m-3.484 0V21"
      />
    </svg>
  );
}

function WhiteArrow() {
  return (
    <svg
      viewBox="0 0 28 12"
      width="28"
      height="12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 6H20"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M15 1.5L20 6L15 10.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ManufacturingIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...props}>
    <style>
      {
        "\n    .stroke-main { \n      fill: none; \n      stroke: currentColor; \n      stroke-width: 12; \n      stroke-linecap: round; \n      stroke-linejoin: round; \n      stroke-miterlimit: 10; \n    }\n  "
      }
    </style>
    <g id="production-line-icon">
      <path className="stroke-main" d="M 125,270 A 120,120 0 1,1 275,270" />
      <path className="stroke-main" d="M 180,62 L 180,42 L 220,42 L 220,62" />
      <path className="stroke-main" d="M 270,98 L 284,84 L 312,112 L 298,126" />
      <path
        className="stroke-main"
        d="M 312,175 L 332,175 L 332,215 L 312,215"
      />
      <path className="stroke-main" d="M 130,98 L 116,84 L 88,112 L 102,126" />
      <path className="stroke-main" d="M 88,175 L 68,175 L 68,215 L 88,215" />
      <rect
        className="stroke-main"
        x={68}
        y={270}
        width={264}
        height={60}
        rx={30}
        ry={30}
      />
      <path className="stroke-main" d="M 98,300 L 68,300" />
      <circle className="stroke-main" cx={123} cy={300} r={10} />
      <circle className="stroke-main" cx={161} cy={300} r={10} />
      <circle className="stroke-main" cx={200} cy={300} r={10} />
      <circle className="stroke-main" cx={239} cy={300} r={10} />
      <circle className="stroke-main" cx={277} cy={300} r={10} />
      <path
        className="stroke-main"
        d="M 105,330 L 105,350 L 295,350 L 295,330"
      />
      <rect className="stroke-main" x={140} y={218} width={50} height={52} />
      <path
        className="stroke-main"
        d="M 155,218 L 155,234 L 175,234 L 175,218"
      />
      <rect className="stroke-main" x={210} y={218} width={50} height={52} />
      <path
        className="stroke-main"
        d="M 225,218 L 225,234 L 245,234 L 245,218"
      />
      <line className="stroke-main" x1={200} y1={100} x2={200} y2={135} />
      <path className="stroke-main" d="M 190,135 L 210,135" />
      <path className="stroke-main" d="M 188,147 C 188,165 212,165 212,147" />
      <path className="stroke-main" d="M 195,147 L 205,147" />
    </g>
  </svg>
);
export default function CircularEconomy() {
  return (
    <section
      className="w-full bg-[#f7f5f0] flex flex-col items-center justify-center py-[84px] px-8"
      aria-label="Circular Economy"
    >
      <h1 className="text-dark-green text-center font-serif text-4xl font-bold uppercase tracking-[0.18em] mb-[64px]">
        Circular Economy
      </h1>

      <div className="relative w-full max-w-[1120px] flex flex-col md:flex-row items-center justify-between px-[20px] gap-3 md:gap-0">
        {/* Horizontal Curved Arrows for Desktop Screens (md and up) */}
        <svg
          viewBox="0 0 800 160"
          className="absolute left-0 top-0 w-full h-[160px] pointer-events-none overflow-visible hidden md:block"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="gArrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto"
            >
              <path
                d="M 0 0 L 10 5 L 0 10"
                fill="none"
                stroke="#6FAD50"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>
          <path
            d="M 232 62 Q 285 14 338 34"
            fill="none"
            stroke="#6FAD50"
            strokeWidth="1.4"
            markerEnd="url(#gArrow)"
          />
          <path
            d="M 422 34 Q 472 10 530 60"
            fill="none"
            stroke="#6FAD50"
            strokeWidth="1.4"
            markerEnd="url(#gArrow)"
          />
          <path
            d="M 530 92 Q 478 138 422 120"
            fill="none"
            stroke="#6FAD50"
            strokeWidth="1.4"
            markerEnd="url(#gArrow)"
          />
          <path
            d="M 338 120 Q 286 140 232 92"
            fill="none"
            stroke="#6FAD50"
            strokeWidth="1.4"
            markerEnd="url(#gArrow)"
          />
        </svg>

        {/* 1. Waste Collection */}
        <div className="z-10 flex flex-col items-center w-[110px] text-black">
          <div className="h-[62px] flex items-center">
            <WasteCollectionIcon />
          </div>
          <span className="mt-[14px] text-[14px] text-center">
            Waste
            <br />
            Collection
          </span>
        </div>

        {/* Straight Arrow: Waste -> Processing */}
        <div className="z-10 rotate-90 md:rotate-0">
          <WhiteArrow />
        </div>

        {/* 2. Processing */}
        <div className="z-10 flex flex-col items-center w-[110px] text-black">
          <div className="h-[62px] flex items-center">
            <ProcessingIcon />
          </div>
          <span className="mt-[14px] text-[14px]">Processing</span>
        </div>

        {/* Mobile Vertical Curved Loop Arrows (Processing <-> Manufacturing) */}
        <div className="z-10 md:hidden flex justify-center my-2">
          <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
            <defs>
              <marker
                id="vArrowG1"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
              >
                <path
                  d="M 0 0 L 10 5 L 0 10"
                  fill="none"
                  stroke="#6FAD50"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </marker>
            </defs>
            {/* Curved arrow DOWN */}
            <path
              d="M 22 10 C 5 25, 5 45, 22 60"
              stroke="#6FAD50"
              strokeWidth="1.4"
              fill="none"
              markerEnd="url(#vArrowG1)"
            />
            {/* Curved arrow UP */}
            <path
              d="M 38 60 C 55 45, 55 25, 38 10"
              stroke="#6FAD50"
              strokeWidth="1.4"
              fill="none"
              markerEnd="url(#vArrowG1)"
            />
          </svg>
        </div>

        {/* 3. Manufacturing */}
        <div className="relative z-10 w-[240px] h-[150px] flex items-center justify-center text-[#6FAD50]">
          <svg
            viewBox="0 0 120 120"
            className="absolute inset-0 w-full h-full overflow-visible"
          >
            <defs>
              <marker
                id="innerArrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5.5"
                markerHeight="5.5"
                orient="auto"
              >
                <path
                  d="M 0 0 L 10 5 L 0 10"
                  fill="none"
                  stroke="#6FAD50"
                  strokeWidth="1.2"
                />
              </marker>
            </defs>
            <path
              d="M 27 41 A 38 38 0 0 1 73 24.5"
              fill="none"
              stroke="#6FAD50"
              strokeWidth="1.25"
              markerEnd="url(#innerArrow)"
            />
            <path
              d="M 79 27 A 38 38 0 0 1 93 79"
              fill="none"
              stroke="#6FAD50"
              strokeWidth="1.25"
              markerEnd="url(#innerArrow)"
            />
            <path
              d="M 89 84.5 A 38 38 0 0 1 41 93"
              fill="none"
              stroke="#6FAD50"
              strokeWidth="1.25"
              markerEnd="url(#innerArrow)"
            />
            <path
              d="M 36 89 A 38 38 0 0 1 24 47"
              fill="none"
              stroke="#6FAD50"
              strokeWidth="1.25"
              markerEnd="url(#innerArrow)"
            />
          </svg>
          <div className="flex flex-col items-center gap-[18px]">
            <ManufacturingIcon className="w-[50px] h-[50px] text-[#6FAD50]" />
          </div>
          <span className="absolute -bottom-[26px] text-[14px]">
            Manufacturing
          </span>
        </div>

        {/* Mobile Vertical Curved Loop Arrows (Manufacturing <-> Recycled Product) */}
        <div className="z-10 md:hidden flex justify-center my-2">
          <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
            <defs>
              <marker
                id="vArrowG2"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
              >
                <path
                  d="M 0 0 L 10 5 L 0 10"
                  fill="none"
                  stroke="#6FAD50"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </marker>
            </defs>
            {/* Curved arrow DOWN */}
            <path
              d="M 22 10 C 5 25, 5 45, 22 60"
              stroke="#6FAD50"
              strokeWidth="1.4"
              fill="none"
              markerEnd="url(#vArrowG2)"
            />
            {/* Curved arrow UP */}
            <path
              d="M 38 60 C 55 45, 55 25, 38 10"
              stroke="#6FAD50"
              strokeWidth="1.4"
              fill="none"
              markerEnd="url(#vArrowG2)"
            />
          </svg>
        </div>

        {/* 4. Recycled Product */}
        <div className="z-10 flex flex-col items-center w-[125px] text-[#6FAD50]">
          <div className="h-[62px] flex items-center ">
            <RecycledProductIcon />
          </div>
          <span className="mt-[14px] text-[14px] text-center">
            Recycled Product
          </span>
        </div>

        {/* Straight Arrow: Recycled Product -> Reuse */}
        <div className="z-10 text-[#6FAD50] rotate-90 md:rotate-0">
          <WhiteArrow />
        </div>

        {/* 5. Reuse */}
        <div className="z-10 flex flex-col items-center w-[72px] text-[#6FAD50]">
          <div className="h-[62px] flex items-center">
            <ReuseIcon />
          </div>
          <span className="mt-[14px] text-[14px]">Reuse</span>
        </div>
      </div>
    </section>
  );
}
