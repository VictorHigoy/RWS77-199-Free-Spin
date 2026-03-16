The page is divided into five main vertical sections: Header, HeroSection, MiddleRow, LastRow, and Footer. These sections follow the normal document flow, with percentage-based negative bottom margins used to create subtle overlaps between sections and achieve a layered background effect that scales across screen sizes.

Images use w-full h-auto within percentage-based or max-w containers so they scale with their parent elements instead of fixed pixel sizes. Decorative elements (gems, coins, scatter, and 1000x icons) are absolutely positioned using percentage offsets, ensuring they stay visually aligned as the layout resizes.

The HeroSection switches from a column layout on mobile to a row layout on larger screens, with slight overlap between the branding visuals and the form container. Form inputs use clamp() for padding and font sizing to allow smooth scaling across devices.

The MiddleRow uses a three-column flex layout where the side icons take 17% each and the center phone content takes 66%, allowing the entire section to scale proportionally. The LastRow background uses clip-path: ellipse(...) to create a curved top edge, while coin images are placed outside the clipped container to prevent them from being cut off.

Assumptions & Tradeoffs

Section overlaps rely on percentage-based negative margins, which require minor adjustments across breakpoints. The Header is permanently removed from the DOM once dismissed, requiring a page refresh to restore it. The form inputs are currently presentational only and do not include validation or submission logic.

-webkit-text-stroke is used to simulate a heavier weight for Chinese text, and overflow-x: hidden is applied globally to prevent horizontal scrolling caused by wide elements or decorative assets extending beyond the viewport.

Tech Stacks: NextJS, Typescript, TailwindCSS
