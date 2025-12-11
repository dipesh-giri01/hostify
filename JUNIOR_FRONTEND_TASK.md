## Hostify — Junior Developer Assignment Document

## Project Overview
You will be recreating screens from the Hostify homestay booking platform.\
A Figma link will be provided as the source of truth for UI, layout, spacing, and interactions.\
This assignment focuses on the Junior Developer Task: UI recreation, navigation, and local state management.\
No backend or API integration is required—use dummy data from a local JSON file.

## Developer Assignment
### Objective
Recreate the Hostify UI exactly as shown in the Figma design, implement navigation between screens, and manage local state cleanly using Zustand or React Context API.\
Emphasize clean, maintainable code and attention to detail in matching the design.

### Final Deliverables
You must submit:
#### 1. UI Pages
* Listings Page (search bar, property grid, filters)
* Property Details Page (property info, amenities, map, similar stays)
* Signup Page (form fields for email, password, confirm password)
* Login Page (form fields for email, password)

#### 2. Working Navigation
* Page-to-page routing according to the design (e.g., clicking a property card navigates to details).

#### 3. Local State
* Search bar state (location, check-in/out dates, number of guests)
* Like/unlike toggle on property cards (persists across navigation)
* Auth form state (input values, error messages)
* Temporary “logged in” flag (e.g., after "login," show a welcome message or redirect)

#### 4. Clean Codebase
* Reusable components (e.g., PropertyCard, Button, InputField)
* Organized folder structure
* Git repository with meaningful commit history
* No API or backend required

### Requirements
#### 1. Pixel-Perfect UI
Follow Figma precisely:
* Spacing, padding, and layout (use tools like Figma's inspect panel for exact values)
* Fonts, weights, and typography (e.g., match font families like Roboto or similar)
* Button styles and states (hover, active, disabled)
* Responsive breakpoints (desktop-first, with mobile adjustments if bonus is pursued)\
The UI must match the design as closely as possible—test on multiple screen sizes.

#### 2. Navigation Setup
Use Next.js App Router or React Router. Routes should include:
  ```
  /                   → Listings page
  /property/[id]      → Details page (dynamic route with property ID)
  /signup             → Signup page
  /login              → Login page
  ```
* Handle navigation events smoothly (e.g., no full page reloads).
* Include a basic header/footer with links (e.g., Home, Hosting, Help).

#### 3. State Management
Use Zustand (preferred for simplicity) or React Context for global state:
* Persist search filters across pages (e.g., updating search updates listings).
* Toggle "liked" properties (use localStorage for persistence if needed).
* Manage form inputs and validation (basic client-side checks, e.g., email format).
* Simulate auth: After "login," set a flag and redirect to listings.

#### 4. Use Dummy JSON
Property data should be loaded from a local JSON file (provided separately or create one based on sample data).\
Example structure:
```json
{
  "properties": [
    { "id": 1, "name": "Brightwoods Cabin", "location": "Bridlepath, Ontario, Canada", "price": 658, ... }
  ]
}
```
* Hardcode 10–15 properties for the listings page.
* No external API fetching—import JSON directly.

#### 5. Component Structure
Recommended structure (using Next.js or Create React App):
```
/app                → Page routes
/components         → Reusable UI elements (e.g., PropertyCard, SearchBar)
/data               → Dummy JSON files
/store              → Zustand stores or Context providers
/utils              → Helper functions (e.g., date formatting)
/styles             → CSS or Tailwind config
```
* Use TypeScript for type safety (optional but recommended).
* Style with Tailwind CSS or styled-components for efficiency.

### Bonus Points (Optional)
* Implement a basic search filter (e.g., filter properties by location or price).
* Add fully responsive mobile layout (media queries for <768px).
* Add a global light/dark theme toggle (using CSS variables or Context).
* Add simple animations (e.g., fade-in on page load using Framer Motion).
