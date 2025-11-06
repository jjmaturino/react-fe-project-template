#!/bin/bash

# Create root directories
mkdir -p .husky
mkdir -p public
mkdir -p src/routes
mkdir -p src/components/layout
mkdir -p src/components/ui
mkdir -p src/hooks
mkdir -p src/lib
mkdir -p src/styles
mkdir -p src/types

# Create .husky files
cat > .husky/pre-commit << 'EOF'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
EOF

# Create public files
touch public/favicon.ico

# Create route files
touch src/routes/__root.tsx
touch src/routes/index.tsx
touch src/routes/about.tsx

# Create component files
touch src/components/layout/Header.tsx
touch src/components/layout/Footer.tsx
touch src/components/layout/Layout.tsx
touch src/components/ui/Button.tsx
touch src/components/ui/Input.tsx
touch src/components/ui/Modal.tsx
touch src/components/ErrorBoundary.tsx

# Create hook files
touch src/hooks/useAuth.ts
touch src/hooks/useLocalStorage.ts

# Create lib files
touch src/lib/api.ts
touch src/lib/utils.ts
touch src/lib/constants.ts

# Create style files
touch src/styles/GlobalStyles.tsx
touch src/styles/theme.ts
touch src/styles/reset.css

# Create type files
touch src/types/api.ts
touch src/types/index.ts

# Create main src files
touch src/App.tsx
touch src/main.tsx
touch src/vite-env.d.ts

# Create root config files
touch .env.example
touch .gitignore
touch .eslintrc.cjs
touch .prettierrc
touch index.html
touch package.json
touch tsconfig.json
touch tsconfig.node.json
touch vite.config.ts
touch README.md

echo "Project structure created successfully!"
