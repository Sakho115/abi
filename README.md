# Cafe-finder

> **Discover the places that don't always show up on the first page.**

ABI is a café discovery and visual storytelling platform built around the idea of finding unique, hidden, and memorable cafés.

The platform combines café discovery, personal journaling, visual galleries, and location-based exploration into one immersive web experience.

---

## ☕ What is ABI?

ABI is designed for people who enjoy discovering cafés beyond the usual recommendations.

Instead of functioning as a conventional restaurant directory, ABI focuses on the **experience of discovering a place**.

The platform brings together:

- Hidden café discovery
- Café journals
- Curated photography
- Interactive location exploration
- Personal stories
- Café-focused travel and lifestyle content

---

## 🧭 Platform Structure

```text
                        ABI
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
   Hidden Cafés      Café Journal     Gallery
          │              │              │
          └──────────────┼──────────────┘
                         │
                         ▼
                       Map
                         │
                         ▼
                 Explore & Discover
````

---

# ✨ Features

## ☕ Hidden Cafés

The **Hidden Cafes** section focuses on discovering lesser-known and distinctive cafés.

Instead of simply listing popular venues, the experience is centered around finding places worth exploring.

Route:

```text
/hidden-cafes
```

---

## 📖 Café Journal

The **Café Journal** provides a storytelling layer for documenting café visits and experiences.

It gives the platform a more personal and editorial character than a standard café directory.

Route:

```text
/journal
```

The journal can be used for:

* Café reviews
* Personal experiences
* Travel notes
* Atmosphere descriptions
* Coffee discoveries
* Stories behind individual locations

---

## 🖼️ Gallery

The **Gallery** presents cafés through visual content.

Route:

```text
/gallery
```

The goal is to make the visual atmosphere of a café part of the discovery experience rather than treating images as simple thumbnails.

---

## 🗺️ Interactive Map

ABI includes a dedicated map experience for exploring café locations.

Route:

```text
/map
```

This provides a location-based way to discover cafés and connect the digital experience with real-world exploration.

---

## 📚 About

The About section provides context about the project, its purpose, and its identity.

Route:

```text
/about
```

---

## ✉️ Contact

A dedicated contact section allows visitors to interact with the platform or its creators.

Route:

```text
/contact
```

---

# 🌿 Experience Design

ABI is designed around four ideas:

### Discover

Find cafés that are easy to miss.

### Explore

Understand the place beyond its name and address.

### Experience

Use stories, imagery, and atmosphere to communicate what makes a café unique.

### Remember

Document café experiences through journals and visual collections.

---

# 🏗️ Application Architecture

The application is organized as a React single-page application with route-based experiences.

```text
React Application
       │
       ▼
   React Router
       │
 ┌─────┼─────────────────────────┐
 │     │         │        │      │
 ▼     ▼         ▼        ▼      ▼
Home  Cafés    Journal  Gallery  Map
                 │
             ┌───┴───┐
             ▼       ▼
           About   Contact
```

---

# 🛠️ Technology Stack

## Core

* React
* TypeScript
* Vite

## Application

* React Router
* TanStack Query

## UI

* shadcn/ui
* Radix UI
* Tailwind CSS
* Lucide React

## Utilities

* React Hook Form
* Zod
* Sonner
* date-fns
* Embla Carousel

---

# 📁 Project Structure

```text
abi/
│
├── public/
│
├── src/
│   ├── components/
│   │   └── ui/
│   │
│   ├── pages/
│   │   ├── Home.*
│   │   ├── HiddenCafes.*
│   │   ├── CafeJournal.*
│   │   ├── Gallery.*
│   │   ├── Map.*
│   │   ├── About.*
│   │   ├── Contact.*
│   │   └── NotFound.*
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── vite.config.*
└── README.md
```

---

# 🚀 Getting Started

## Prerequisites

Make sure you have the following installed:

* Node.js
* npm

---

## Clone the Repository

```bash
git clone https://github.com/Sakho115/abi.git
cd abi
```

---

## Install Dependencies

```bash
npm install
```

---

## Start the Development Server

```bash
npm run dev
```

The Vite development server will provide a local URL where the application can be accessed.

---

# 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

# 🎯 Use Cases

ABI can be used as:

* A hidden café discovery platform
* A café-hopping guide
* A coffee-focused travel experience
* A visual café journal
* A curated local discovery website
* A lifestyle and photography platform
* A foundation for a larger café community

---

# 🎨 Design Philosophy

ABI is built around the idea that discovering a café is more than finding an address.

A location has:

* Atmosphere
* Architecture
* People
* Stories
* Food
* Coffee
* Memories

ABI attempts to represent those elements digitally.

```text
            LOCATION
                +
             STORIES
                +
             IMAGES
                +
             JOURNAL
                +
              MAP
                ↓
        CAFÉ EXPERIENCE
```

---

# 🔮 Future Possibilities

ABI can be extended into a larger café discovery ecosystem with features such as:

* User accounts
* Personal café collections
* Café ratings and reviews
* Saved cafés
* Location-based recommendations
* Café check-ins
* Community submissions
* Advanced map filtering
* Nearby café discovery
* Café owner profiles
* Event discovery
* Coffee recommendations
* Personalized discovery feeds

---

# 📌 Project Status

**Café Discovery / Lifestyle Web Project**

ABI is an exploration of how a location-based discovery platform can combine editorial storytelling, visual content, and interactive exploration into a single experience.

---

# 👨‍💻 Author

Developed by **Sakho115**.

GitHub:

[https://github.com/Sakho115](https://github.com/Sakho115)

---

# 📄 License

See the repository license for applicable usage and distribution terms.

```
```
