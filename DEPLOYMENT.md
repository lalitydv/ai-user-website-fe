# Deployment Guide

## Environment Variables Setup

To deploy this application successfully, you need to configure the following environment variables in your Vercel project:

### Required Environment Variables

1. **NEXT_PUBLIC_SUPABASE_URL**
   - Your Supabase project URL
   - Format: `https://your-project-id.supabase.co`

2. **NEXT_PUBLIC_SUPABASE_ANON_KEY**
   - Your Supabase anonymous key
   - Found in your Supabase project settings

3. **GOOGLE_CLIENT_ID**
   - Google OAuth client ID
   - From Google Cloud Console

4. **GITHUB_CLIENT_ID**
   - GitHub OAuth client ID
   - From GitHub OAuth App settings

### How to Set Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add each variable with the following settings:
   - **NEXT_PUBLIC_SUPABASE_URL**: Production, Preview, Development
   - **NEXT_PUBLIC_SUPABASE_ANON_KEY**: Production, Preview, Development
   - **GOOGLE_CLIENT_ID**: Production, Preview, Development
   - **GITHUB_CLIENT_ID**: Production, Preview, Development

### Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from the project settings
3. Configure OAuth providers in Authentication > Providers:
   - Enable Google provider
   - Enable GitHub provider
   - Set redirect URLs to: `https://your-domain.vercel.app/auth/callback`

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create OAuth 2.0 credentials
3. Add authorized redirect URIs:
   - `https://your-supabase-project.supabase.co/auth/v1/callback`
   - `https://your-domain.vercel.app/auth/callback`

### GitHub OAuth Setup

1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App
3. Set Authorization callback URL to: `https://your-supabase-project.supabase.co/auth/v1/callback`

## Build Issues Fixed

The application has been updated to handle missing environment variables gracefully during build time. This prevents build failures when environment variables are not configured.

### Changes Made

1. **lib/supabase.ts**: Made Supabase client initialization conditional
2. **contexts/AuthContext.tsx**: Added null checks for Supabase client
3. **app/auth/callback/route.ts**: Added environment variable validation
4. **app/test-auth/page.tsx**: Added null checks for Supabase client

## Testing

After deployment, you can test the authentication by visiting:
- `/test-auth` - API and authentication tests
- `/test-login` - OAuth login tests
- `/login` - Main login page
- `/signup` - Main signup page

## Troubleshooting

If you encounter build errors:
1. Ensure all environment variables are set in Vercel
2. Check that Supabase project is properly configured
3. Verify OAuth redirect URLs are correct
4. Check the deployment logs for specific error messages 