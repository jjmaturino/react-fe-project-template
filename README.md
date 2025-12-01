# Getting Started
This scaffold provides a solid foundation for building React applications with type safety, modern routing, efficient data management, and a flexible styling solution.

## About This Project
### Tech Stack

This project is built with modern tools and libraries:

1. React 18 with TypeScript
2. TanStack Router for routing
3. TanStack Query for data fetching
4. styled-components for styling
5. Modern build system with Vite

```
src/
├── api/             # HTTP client setup (e.g., axios instance, base URL)
├── data/            # Centralized data management logic 
│   ├── post/
│   │   ├── post.queries.ts  # Query keys, query options (the "source of truth")
│   │   └── post.hooks.ts    # Custom React hooks wrappers over Tanstack Query (usePost, useCreatePost)
│   ├── user/
│   │   ├── user.queries.ts
│   │   └── user.hooks.ts
│   └── index.ts     # Barrel file to export all hooks/options
├── routes/          
│   ├── __root.tsx   
│   ├── _auth/       # Pathless layout for authenticated routes
│   │   └── dashboard.tsx
│   ├── index.tsx    # /
│   └── ...(other routes[ex: posts])/
│       ├── $postId.tsx # Uses the loader to pre-fetch post data
│       └── index.tsx   # Uses the loader to pre-fetch post list data
├── services/        #  Defines communication with external services, primarily backend API. (data management logic uses this primarly 
├── context/         # Context Providers
└── main.tsx         # Router and QueryClientProvider setup
```
