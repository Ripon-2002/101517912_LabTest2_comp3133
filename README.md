# Harry Potter Angular App – COMP3133 Lab Test 2b

## Student Information
**Name:** Ripon Sutradhar Rimon  
**Student ID:** 101517912  
**Course:** COMP3133  

---

## Application Description
This project is an Angular web application built for Lab Test 2b.  
The application consumes a public Harry Potter API and displays character information in a clean and interactive UI.

Users can:
- View all Harry Potter characters
- Filter characters by house
- Click on a character to view detailed information

---

## Features Implemented
- Fetch data from a public API using Angular HttpClient
- Display characters in a responsive card layout
- Filter characters by Hogwarts house (Gryffindor, Slytherin, Hufflepuff, Ravenclaw)
- View detailed character information on a separate page
- Navigation using Angular Router
- Use of Angular standalone components
- Use of:
  - `@for`
  - `@if`
  - `@switch`
  - `signal`
- Basic UI styling using Angular Material and CSS

---

## Technologies Used
- Angular (Latest Version)
- TypeScript
- Angular Material
- RxJS
- Harry Potter Public API

---

## API Used
Harry Potter API:  
https://hp-api.onrender.com/

---

## Project Structure
- **components/**
  - characterlist
  - characterfilter
  - characterdetails
- **services/**
  - harrypotter.service.ts
- **models/**
  - character.ts
- **routing**
  - app.routes.ts

---

## How to Run the Project

1. Clone the repository:
```bash
git clone https://github.com/Ripon-2002/101517912_LabTest2_comp3133.git