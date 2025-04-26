DeepSoul Assignment
Overview
This is my submission for the DeepSoul ReactJS Intern assignment. It is a mental wellness landing page built with Next.js, styled with TailwindCSS, and animated using Framer Motion. The site provides a supportive space for users to connect with therapists, join communities, and access mental health resources.
Tech Stack

Next.js: Framework for building the app structure (version 15.3.1).
React: Library for building UI components (version 18).
TailwindCSS: Utility-first CSS framework for styling (version 3.4.17).
Framer Motion: Library for animations and transitions (version 10.12.16).
Lucide React: Icon library for UI elements (version 0.503.0).
TailwindCSS Animate: Additional animation utilities for TailwindCSS (version 1.0.7).
Autoprefixer & PostCSS: Dev tools for CSS processing.

Components

Top Menu Bar: Navigation bar with light/dark mode toggle.
Hero Section: Welcome section with animated illustrations, floating images (e.g., /images/meditation-main.jpg), and call-to-action buttons.
Features Section: Cards highlighting key features of DeepSoul (support, community, tools).
Therapy Section: Information on therapy services with an image (/images/therapist.jpg) and a "Learn More" button.
Community Section: Community cards (e.g., Anxiety Support, Depression Recovery) with real images (/images/person1.jpg, /images/person2.jpg, etc.), buttons, and hover animations.
Testimonial Section: A carousel of user testimonials with real images (/images/person1.jpg, /images/person2.jpg, etc.), quotes, and navigation controls.
CTA Banner: Call-to-action section encouraging users to start their journey.
Bottom Footer: Includes contact info, copyright, and social links.
Back to Top: A button to scroll back to the top of the page.

Live Preview
https://deepsoul-assignement-d6ia.vercel.app/


Improvements

Added smooth scrolling and enhanced animations using Framer Motion for a dynamic user experience.
Improved mobile design with responsive grids and TailwindCSS utilities.
Implemented interactive mouse movement effects and floating images in the Hero Section.
Included real images across sections (Hero, Therapy, Community, Testimonials) to enhance visual appeal.
Added an autoplay testimonial carousel with hover-to-pause functionality.

How to Run

Clone the Repository:git clone https://github.com/hanane987/DeepSoul.git


Navigate to the Project Directory:cd deepsoul-assignement/deepsoul 


Install Dependencies:npm install


Run the Development Server:npm run dev


Open the App:
Open http://localhost:3000 in your browser to view the app.

Test in both Chrome and Firefox to ensure compatibility.



Deployment

The project is deployed on Vercel via GitHub integration.
Any push to the main branch triggers an automatic deployment.
To deploy manually using Vercel CLI:
Install Vercel CLI:npm install -g vercel


Login:vercel login


Deploy:vercel


Deploy to production:vercel --prod







