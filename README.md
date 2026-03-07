# Trunal Frontend

The flagship web application for the Trunal Digital Agency. A high-performance, visually stunning frontend built with Next.js 15+ and modern animation libraries.

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP, Framer Motion
- **3D Graphics**: Three.js
- **Icons**: Lucide React, Flaticon
- **Real-time**: Socket.io-client
- **Smooth Scrolling**: Lenis
- **Portal Components**: Shadcn UI

## Getting Started

### Prerequisites

- Node.js (v18+)
- Backend server running (default: port 4001)

### Setup

1. **Install dependencies**:

    ```bash
    npm install
    ```

2. **Configure environment**:
   Create a `.env.local` file based on `.env.local.example`:
    - `NEXT_PUBLIC_API_URL`: Backend server address (e.g., `http://localhost:4001`)

3. **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the application.

## Core Modules

- **Landing Page**: Modern, high-conversion homepage featuring GSAP animations and smooth scrolling.
- **Client Portal**: Secure dashboard for users to manage projects and communication.
- **Admin Dashboard**: Internal tooling for project management and user oversight.
- **Real-time Chat**: Integrated messaging system using Socket.io.

## Directory Structure

- `app/`: Next.js App Router paths and layouts.
- `components/`: Reusable interface elements, organized by feature area (Landing, Portal, Shared).
- `hooks/`: Custom React hooks for authentication, data fetching, and socket events.
- `lib/`: Shared utility functions and third-party library configurations.
- `public/`: Static assets including images, fonts, and icons.

## Build and Deployment

Run `npm run build` to create a production-optimized build of the Next.js application.
