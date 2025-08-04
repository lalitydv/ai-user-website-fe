# Authentication Setup Guide

This project uses Supabase for authentication with Google and GitHub OAuth providers.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tutnxnanznzvwgybxhuf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1dG54bmFuem56dndneWJ4aHVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3ODE4ODMsImV4cCI6MjA2ODM1Nzg4M30.9-BrYWor2Zs3eA9NI8Gf-B1CENVd2hFl0zJsHlhPq-w
```

## Supabase Configuration

### 1. Google OAuth Setup

1. Go to your Supabase project dashboard
2. Navigate to Authentication > Providers
3. Enable Google provider
4. Add the following configuration:
   - **Client ID**: `84646516109-u1tn1g0ul929ujp3v39q3o96qfr7qok5.apps.googleusercontent.com`
   - **Client Secret**: (Get this from Google Cloud Console)
   - **Redirect URL**: `https://tutnxnanznzvwgybxhuf.supabase.co/auth/v1/callback`

### 2. GitHub OAuth Setup

1. In Supabase dashboard, go to Authentication > Providers
2. Enable GitHub provider
3. Add the following configuration:
   - **Client ID**: `Demo`
   - **Client Secret**: `Shinecoder`
   - **Redirect URL**: `https://tutnxnanznzvwgybxhuf.supabase.co/auth/v1/callback`

## Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to Credentials > Create Credentials > OAuth 2.0 Client IDs
5. Configure the OAuth consent screen
6. Add authorized redirect URIs:
   - `https://tutnxnanznzvwgybxhuf.supabase.co/auth/v1/callback`
   - `http://localhost:3000/auth/callback` (for development)

## GitHub OAuth App Setup

1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App
3. Set the following:
   - **Application name**: Buildro AI
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `https://tutnxnanznzvwgybxhuf.supabase.co/auth/v1/callback`

## Features Implemented

✅ **Google OAuth Authentication**
✅ **GitHub OAuth Authentication**
✅ **User Profile Management**
✅ **Dark Mode Support**
✅ **Responsive Design**
✅ **Authentication State Management**
✅ **Protected Routes**
✅ **User Avatar Display**
✅ **Sign Out Functionality**

## Usage

1. Users can sign in with Google or GitHub
2. Authentication state is managed globally
3. User information is displayed in the header
4. Protected dashboard page for authenticated users
5. Sign out functionality available in user dropdown

## File Structure

```
├── lib/supabase.ts              # Supabase client configuration
├── contexts/AuthContext.tsx     # Authentication context provider
├── app/auth/callback/route.ts   # OAuth callback handler
├── app/login/page.tsx           # Login page with OAuth buttons
├── app/signup/page.tsx          # Signup page with OAuth buttons
├── app/dashboard/page.tsx       # Protected dashboard page
├── components/header.tsx        # Header with user menu
└── components/theme-toggle.tsx  # Theme toggle component
```

## Testing

1. Start the development server: `npm run dev`
2. Navigate to `/login` or `/signup`
3. Click on Google or GitHub buttons
4. Complete the OAuth flow
5. You should be redirected back and see your user information in the header
