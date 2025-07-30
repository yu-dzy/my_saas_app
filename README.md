# Voice Academy

A voice-powered learning platform built with Next.js where students can create AI companions to learn various subjects through interactive voice conversations.

## Features

- Create personalized learning companions with custom voices and teaching styles
- Learn through real-time voice interactions using VAPI integration
- Support for Mathematics, Science, Language, History, Coding, and Economics
- Track learning sessions and progress over time
- Secure user authentication with Clerk
- Responsive design built with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15.4.3 with TypeScript
- **Authentication**: Clerk
- **Database**: Supabase
- **Voice AI**: VAPI (Voice AI Platform)
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Lottie React
- **Form Handling**: React Hook Form + Zod validation
- **Error Tracking**: Sentry

## Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- A Supabase account and project
- A Clerk account for authentication
- A VAPI account for voice AI functionality
- A Sentry account for error tracking (optional)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd voice-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # VAPI Voice AI
   NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token

   # Sentry (Optional)
   SENTRY_DSN=your_sentry_dsn
   ```

4. **Database Setup**
   
   Create these tables in your Supabase project:

   ```sql
   -- Companions table
   CREATE TABLE companions (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     subject TEXT NOT NULL,
     topic TEXT NOT NULL,
     voice TEXT NOT NULL,
     style TEXT NOT NULL,
     duration INTEGER NOT NULL,
     author TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Session history table
   CREATE TABLE session_history (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id TEXT NOT NULL,
     companion_id UUID REFERENCES companions(id),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Bookmarks table
   CREATE TABLE bookmarks (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id TEXT NOT NULL,
     companion_id UUID REFERENCES companions(id),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     UNIQUE(user_id, companion_id)
   );
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to see the application.

## How to Use

### Creating a Learning Companion

1. Go to `/companions/new`
2. Fill out the form with:
   - **Name**: Give your AI tutor a name
   - **Subject**: Pick from Math, Science, Language, History, Coding, or Economics
   - **Topic**: Describe what you want to learn about
   - **Voice**: Choose male or female
   - **Style**: Select formal or casual teaching approach
   - **Duration**: Set how long you expect sessions to last

### Starting a Session

1. Navigate to your companion's page
2. Click "Start Session"
3. Allow microphone access
4. Start talking with your AI companion
5. Watch the conversation transcript appear in real-time

### Managing Your Learning

- **My Journey**: See your learning progress and session history
- **Companions**: Browse all available learning companions
- **Recent Sessions**: Quick access to your recent companions

## Project Structure

```
├── app/                    # Next.js app directory
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── CompanionComponents/ # Companion-specific components
├── lib/                   # Utilities and configurations
│   ├── actions/          # Server actions
│   └── utils.ts          # Helper functions
├── constants/            # App constants
├── types/                # TypeScript definitions
└── public/               # Static files
```

## Configuration

### Voice Settings
Configure available voices in `constants/index.ts`:

```typescript
export const voices = {
  male: { casual: "voice_id_1", formal: "voice_id_2" },
  female: { casual: "voice_id_3", formal: "voice_id_4" },
};
```

### Subjects and Colors
Customize subjects and their theme colors:

```typescript
export const subjects = ["maths", "science", "language", "history", "coding", "economics"];
export const subjectsColors = {
  science: "#E5D0FF",
  maths: "#FFDA6E",
  // add more colors as needed
};
```

## Deployment

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Connect the repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy

For other platforms, build the project first:

```bash
npm run build
npm start
```

## Development

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Credits

- VAPI for voice AI capabilities
- Clerk for authentication services
- Supabase for database infrastructure
- shadcn/ui for UI components