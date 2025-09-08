# Resource Explorer - Mick And Morty
## Demo
Live Demo: https://resource-explorer-eta.vercel.app/

## Requirements
Before running the project, ensure you have the following installed:

- Node.js >= 18.0.0

- npm >= 9.0.0

- (Optional) Git for cloning the repository



## Getting Started


1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```
2. Install dependencies:
```bash
npm install
# or
yarn install
```
3. Create a .env file in the root directory and add your environment variables:
```bash
NEXT_PUBLIC_API_URL=https://rickandmortyapi.com/api
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```
5. Open http://localhost:3000 to view it in your browser.

## Tech Stack

- Framework: Next.js, React.js
- Language: TypeScript
- Styling: Tailwind CSS, Material UI
- API fetch: TanStack, axios
- Deployment: Vercel

## Project Overview

### Features
- 🔍 Search, filter, sort items
- ❤️ Save favorites with local storage
- ⏬ Infinite scrolling for large datasets.
  
### Welcome Page:
It includes a button that navigates to the characters list page.
<img width="1137" height="796" alt="image" src="https://github.com/user-attachments/assets/2c682448-5ddf-4db2-bc9b-08f3e8b6ff49" />
### List of characters: 
With an example of search, filter, and sort functionalities
<img width="1152" height="791" alt="image" src="https://github.com/user-attachments/assets/ef17fed8-5e04-4cfa-8415-7136b40b82ac" />
### Detail Page:
<img width="1114" height="651" alt="image" src="https://github.com/user-attachments/assets/b7ace16d-0c21-4fd1-afa7-cc5d204d6851" />

## Side note

If I had more time, I would:
- Add search, sort, filter, and “clear all” functionality for favorite items stored in localStorage.
- Improve the overall UI for a more polished and responsive experience.
- Implement breadcrumbs for better navigation.
- Complete full CRUD operations for the character data.


