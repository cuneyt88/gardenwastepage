# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Project file structure

Garden Waste Page (folder)
|
|----readme.md  
SOLUTION
│
├── app/
│ ├── favicon.ico
│ ├── glabal.css
│ ├── layout.tsx
│ └── page.tsx
├── node_modules/
├── package.json
├── .eslint.config.mjs
├── .gitignore
├── next.config.js
├── jsconfig.json  
├── components/
│ └── Entitycomponents/
│ └── Footer.tsx
│ └── Regioncomponents/
│ └── SelectSkipRegion.tsx
├── utils/
│ └── skipStore.ts
├── next-env.d.ts  
├── postcss.config.mjs  
└── package-lock.json

# Libraries used

### Zustand

#### High Performance

Components re-render only when the specific piece of state they use changes, avoiding unnecessary updates common in Context API.

#### Flexible Architecture

It allows creating multiple independent stores, making it easy to organize and modularize state logic.

#### No Provider Wrapping

Unlike Context API, Zustand doesn’t require wrapping components in a provider, simplifying the component tree.

#### Built-in TypeScript Support

Zustand integrates seamlessly with TypeScript, offering strong type safety without extra configuration.

#### Lightweight Bundle

At just ~1-2 kB, it adds negligible overhead to your app’s bundle size.

#### Shallow Learning Curve

Its simple API makes it easier to learn and adopt compared to Redux or Recoil.

#### Community Trust

Widely adopted in the React ecosystem, backed by a strong community and maintained by reputable contributors.

### MUI

#### Consistent and Modern Design

MUI is based on Google's Material Design language. This ensures that your applications have a consistent, modern, and user-friendly appearance.

#### Customizability

MUI components are highly customizable in terms of themes and styles. You can easily modify colors, typography, sizes, and many other properties to fit your specific design requirements.

#### Responsive Design

MUI components are designed to adapt automatically to various screen sizes and devices. This simplifies the creation of responsive web applications.

#### Strong Community Support

MUI has a large and active community. This provides a significant advantage when troubleshooting issues and seeking assistance.

#### Continuous Development:

MUI is under continuous development and receives regular updates. New features and improvements are frequently released.

#### React Integration:

MUI integrates seamlessly with React. It can be easily implemented in React projects, making it a popular choice among React developers.

# Responsive design

This component adapts seamlessly across devices by:

Dynamic Layout: The card switches between vertical (mobile/tablet) and horizontal (desktop) layouts using CSS flex and media queries. Images stack on top for smaller screens and display inline for larger ones.

Adaptive UI Elements: Buttons resize and reflow into grid/flex patterns based on screen width, ensuring touch-friendly interactions on mobile while optimizing space on desktops.

Fluid Typography: Font sizes, spacing, and element proportions scale smoothly using relative units (rem) and MUI's responsive breakpoints.

# The goal to be achieved with the changes

In this component, the goal is to show the most suitable skip options to the user in a simple and clear manner. Instead of requiring users to browse through 10 different cards to select a skip, we simplify the user experience by displaying a single card component that updates dynamically based on the selected skip.

I chose to highlight the 8-yard skip as the default option because it's often the most commonly needed size. However, the implementation allows for flexibility to display the most relevant skips based on user preferences or availability, making it easier for the user to make a selection.

The design also includes a dynamic image selection to reflect the chosen skip size. For example, I created a structure that shows different images corresponding to the skip sizes to help users visualize the options more effectively. This visual feedback is crucial for making the decision process intuitive and user-friendly.

Additionally, Zustand is used to create a global state so that the selected skip size and its details are accessible throughout the app. This ensures that no matter which part of the app the user navigates to, they will have consistent access to the skip details they've selected.

Lastly, the component is fully responsive, ensuring that it works seamlessly across devices. The layout adapts from a vertical arrangement on smaller screens (mobile/tablet) to a horizontal layout on larger screens (desktop). The buttons, typography, and images are dynamically adjusted using media queries, making the application touch-friendly and visually appealing on all screen sizes.

# Deploy on Sandbox
