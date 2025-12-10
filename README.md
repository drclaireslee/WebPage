# Team
Names: Rohan Mallu, Zuriel Pagan, Kriston Theng, Russell Jones, Anton Kovalev
Team Name: Motley Crue
   
# Project 2: Website for a Client
This is the class repository of the website for our Project 2 client

# Website Description Given By Dr. Claire Lee: 
I am planning to update my professional website to better showcase my recent research activities and teaching experiences. The updated site will serve as a comprehensive platform to highlight my academic and professional contributions, while also providing useful information for different audiences.

The website will feature the following sections (with content and categories to be refined and expanded over time):

- About: A professional overview of myself and the lab.
- Research: Current and past research projects, publications, and areas of focus.
- Teaching: Courses taught, teaching philosophy, and experiential learning approaches.
- Grants: Information on funded research projects, collaborations, and funding acknowledgments.
- Members: Profiles of current lab members, collaborators, and alumni.
- Additional Resources: Other relevant content such as news, media features, outreach efforts, or professional activities.

The primary audiences for the website are current and prospective students, as well as academic colleagues and collaborators. My goal is to create a stronger professional presence online that not only reflects my work but also promotes the activities of my research lab. In doing so, I hope the site will serve as both a resource for those interested in my work and a platform to encourage new opportunities for collaboration and engagement.

Thank you!

# Wiggle Room Requirements
1. API Integration: Leaflet API on the contact page that pulls data from OpenStreetMaps
2. Security Best Practices: Login page that uses password hashing and validation for all input.

# Client Folder
This is where all of the front-end work is stored (i.e. React, CSS, Bootstrap, etc.) using Vite.

- 12/08/2025:
    - Added Dr. Lee bio back to main page
    - Added footer component that support page naviagtion and login for users
    - Footer contains link to admin page where information in the backend can be edited
    - Research page contains a few books by dr lee and a link to their Google Scholar
    - Teaching now contains course taught by Dr. Lee at UML and INHA
    - Grants format changed to more neatly display grants awarded to Dr. Lee
    - Memebers page shows Dr. Lee's bio and fetches data from the back end to display team members
    - Added activities page displays Dr. Lee's envolvement and services she provides
    - Contact page now contains fixed embedded map and an embedded contact form 
- 11/16/2025-11/18/2025: 
    - Added padding at the root to format content better
    - Designed contact page to add basic
    contact details (still needs form), map
    commented out due to issues with accessibility
    - Added accessibility labels for navbar items
    - Added navbar items for Teaching
    - Renamed Home to About, Team to Members on Navbar
    - Initialized new basic research page
    -  Added the professor's research interests, methods, and geographical focus
    - Removed container fluid, for Grants and Home pages
- 11/12/2025: Added embedded map using OpenStreetMap and Leaflet.js for API integration.
- 11/01/2025: Creation of the Research, Publications, Contact, and Team pages.
- 10/27/2025 - 10/31/2025: Basic homepage and navigation bar
- 10/25/2025: Intialization of the frontend using React and Vite.

# Server Folder
This is where all of the back-end work is stored (Express server, Node Server, Database, etc.) using Node.js, Express, and MongoDB.

- 12/08/2025:
    - Use of vercel blob to store images related to team members 
- 11/09/2025 - 11/13/2025: Creation of the authentication server, login page, initial database setup, and status codes for API calls
- 10/25/2025: Intialization of the Backend Node server.
