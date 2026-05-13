# ESUTSphere — Project Context v2.0

> Single source of truth for any AI assistant, developer, or collaborator working on ESUTSphere.
> Read this fully before writing any code, suggesting changes, or generating components.
> Stack: Next.js 16.2.6 · Tailwind CSS v4.3.0 · Motion v12 · Firebase v12 · Cloudinary v2
> Last updated: May 2026

---

## 1. What Is ESUTSphere?

ESUTSphere is a **university-focused academic social platform** built for students and lecturers at **Enugu State University of Science and Technology (ESUT), Agbani, Enugu State, Nigeria**.

It combines three things:
1. **Academic Resource Library** — Upload notes, past questions, research, seminars, assignments, textbooks. Organized by department, course code, and level.
2. **Educational Social Media** — Follow users, react, comment, share, build an academic profile.
3. **Campus Blog & News** — Rich-text blog posts, campus news, opinions, articles.

**Target Users:**
- ESUT students (primary) — any department, any level
- ESUT lecturers (secondary) — upload official course materials
- Non-ESUT visitors (tertiary) — read-only guests for research

**Problem it solves:**
- No central trusted place to share and access ESUT academic materials
- Students miss notes during breaks; no way to read ahead
- Past questions scattered across WhatsApp groups and individual phones
- No academic profile — contributions are never credited

**Future scale:** Starts as ESUT-only. Architecture supports multi-university expansion — just add `universityId` to all Firestore documents when ready.

---

## 2. Project Name & Branding

| Item | Value |
|------|-------|
| **Project name** | ESUTSphere |
| **Tagline** | The Academic Hub for ESUT Students |
| **Domain (planned)** | `esutsphere.com` / `esutsphere.vercel.app` |
| **Primary color** | Electric Purple `#7C3AED` |
| **Secondary accent** | Cyan `#06B6D4` |
| **Background** | Deep Space Navy `#080810` |
| **Theme** | Dark mode ONLY — no light mode |
| **Logo** | Stylized lowercase "e" inside orbital network rings, purple→cyan gradient |
| **Logo files** | `public/logo.png` (512×512 transparent) · `public/favicon.png` (32×32 transparent) · `public/apple-touch-icon.png` (180×180) |

---

## 3. Tech Stack

| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| **Framework** | Next.js (App Router) | `^16.2.6` | Latest — use App Router, Server Components where possible |
| **Styling** | Tailwind CSS | `^4.3.0` | CSS-first config — NO `tailwind.config.js` |
| **UI Animations** | Motion | `^12.38.0` | Formerly Framer Motion — import from `motion/react` |
| **Database** | Firebase Firestore | `^12.13.0` | NoSQL, real-time |
| **Authentication** | Firebase Auth | (included in Firebase) | Google OAuth primary + Email/Password fallback |
| **File Storage** | Cloudinary | `^2.10.0` | All media: profile pics, PDFs, DOCX, images |
| **Rich Text Editor** | TipTap | `^3.22.5` | Blog posts — requires 3 packages |
| **PDF Preview** | react-pdf | `latest` | In-browser document viewer |
| **Toast Notifications** | react-hot-toast | `^2.6.0` | All feedback toasts |
| **Icons** | Lucide React | `^1.14.0` | Consistent icon system |
| **Hosting** | Vercel | — | Auto-deploy from GitHub |
| **Email** | Nodemailer + Gmail SMTP | `^8.0.7` | Account alerts, rejection emails |
| **Payments** | None (v1) | — | Future: Paystack for premium features |

### package.json (verified May 2026)
```json
{
  "dependencies": {
    "next": "^16.2.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.4.0",
    "tailwindcss": "^4.3.0",
    "@tailwindcss/postcss": "^4.3.0",
    "firebase": "^12.13.0",
    "motion": "^12.38.0",
    "@tiptap/react": "^3.22.5",
    "@tiptap/pm": "^3.22.5",
    "@tiptap/starter-kit": "^3.22.5",
    "react-pdf": "latest",
    "react-hot-toast": "^2.6.0",
    "lucide-react": "^1.14.0",
    "cloudinary": "^2.10.0",
    "nodemailer": "^8.0.7"
  }
}
```

### ⚠️ Critical Import & Setup Notes

**Motion (formerly Framer Motion):**
```typescript
import { motion, AnimatePresence } from "motion/react"; // ✅ correct
import { motion } from "framer-motion";                 // ❌ do NOT use
```

**Tailwind v4 — no config file:**
```css
/* globals.css — v4 syntax */
@import "tailwindcss";   /* ✅ replaces @tailwind directives */

@theme {
  /* All design tokens here — replaces tailwind.config.js */
}

/* Renamed utilities in v4 */
/* bg-gradient-to-r → bg-linear-to-r */
/* flex-grow → grow  |  flex-shrink → shrink */
/* outline-none → outline-hidden */
/* !flex → flex!  (important suffix moves to end) */
/* bg-opacity-50 → bg-black/50 */
```

**postcss.config.mjs (required for Next.js + Tailwind v4):**
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

**TipTap v3 — three packages required:**
```bash
npm install @tiptap/react @tiptap/pm @tiptap/starter-kit
```

**Next.js 16 new caching (use cache directive):**
```typescript
// Next.js 16 uses opt-in caching with "use cache" directive
// All dynamic pages are server-rendered by default — no implicit caching
"use cache"; // Add to top of page/component to enable caching
```

---

## 4. Folder Structure

```
esutsphere/
├── app/
│   ├── (auth)/                         # Auth group — no main nav
│   │   ├── login/page.tsx              # Sign in with Google
│   │   └── onboarding/
│   │       ├── step-1/page.tsx         # Academic info (matric, dept, year)
│   │       ├── step-2/page.tsx         # Profile setup (username, bio, photo)
│   │       ├── step-3/page.tsx         # Admission letter upload
│   │       └── pending/page.tsx        # Awaiting approval lockscreen
│   ├── (app)/                          # Main app — requires auth + approved
│   │   ├── layout.tsx                  # Sidebar + TopNav wrapper
│   │   ├── feed/page.tsx               # Home feed
│   │   ├── explore/page.tsx            # Trending + suggested users
│   │   ├── library/
│   │   │   ├── page.tsx                # Document library with filters
│   │   │   └── [docId]/page.tsx        # Single document + PDF preview
│   │   ├── blog/
│   │   │   ├── page.tsx                # Blog listing
│   │   │   ├── write/page.tsx          # TipTap editor
│   │   │   └── [slug]/page.tsx         # Single blog post
│   │   ├── profile/[username]/page.tsx # Public user profile
│   │   ├── dashboard/
│   │   │   ├── page.tsx                # Student personal dashboard
│   │   │   ├── uploads/page.tsx        # My uploaded documents
│   │   │   ├── bookmarks/page.tsx
│   │   │   └── settings/page.tsx
│   │   ├── notifications/page.tsx      # Full page on mobile
│   │   └── upload/page.tsx             # Upload document (or use modal)
│   ├── (admin)/                        # Admin group — role-protected
│   │   ├── layout.tsx                  # Admin sidebar layout
│   │   ├── admin/
│   │   │   ├── page.tsx                # Super admin overview dashboard
│   │   │   ├── users/page.tsx          # All users management
│   │   │   ├── approvals/page.tsx      # All pending approvals
│   │   │   ├── content/page.tsx        # Content moderation
│   │   │   ├── reports/page.tsx        # Reported content queue
│   │   │   └── settings/page.tsx       # Site settings
│   │   └── class-admin/
│   │       ├── page.tsx                # Course rep dashboard
│   │       ├── approvals/page.tsx      # Pending approvals for their class
│   │       └── class/page.tsx          # Class members list
│   ├── api/
│   │   ├── upload/route.ts             # Cloudinary upload handler
│   │   ├── send-email/route.ts         # Nodemailer email sender
│   │   ├── notifications/route.ts      # Notification creation
│   │   ├── search/route.ts             # Search index queries
│   │   ├── admin/
│   │   │   ├── approve-user/route.ts
│   │   │   ├── reject-user/route.ts
│   │   │   └── assign-class-admin/route.ts
│   │   └── webhooks/                   # Future: Paystack webhook
│   ├── layout.tsx                      # Root layout
│   ├── page.tsx                        # Landing page (public)
│   ├── not-found.tsx                   # 404 page
│   └── globals.css                     # Tailwind v4 @import + @theme
│
├── components/
│   ├── ui/                             # Button, Input, Badge, Avatar, Card, Modal, Skeleton, Spinner, Tooltip
│   ├── layout/                         # TopNav, Sidebar, BottomTabBar, RightSidebar
│   ├── feed/                           # FeedPost, ReactionBar, CommentSection, FeedSkeleton
│   ├── library/                        # DocumentCard, DocumentFilters, PDFPreview, UploadModal
│   ├── profile/                        # ProfileHeader, ProfileStats, FollowButton
│   ├── onboarding/                     # OnboardingWrapper, StepProgress, AdmissionUpload
│   ├── editor/                         # TipTapEditor, TipTapToolbar
│   ├── search/                         # SearchBar, SearchOverlay, SearchResults
│   ├── notifications/                  # NotificationBell, NotificationPanel, NotificationItem
│   └── admin/                          # PendingApprovalCard, UserTable, StatsCard, ReportCard
│
├── lib/
│   ├── firebase.ts                     # Firebase init + exports
│   ├── firestore.ts                    # Firestore helper functions (NO raw calls in components)
│   ├── cloudinary.ts                   # Upload helpers
│   ├── auth.ts                         # Auth helpers, session checks
│   ├── email.ts                        # Nodemailer email templates
│   └── search.ts                       # Search index helpers
│
├── hooks/
│   ├── useAuth.ts                      # Current user + auth state
│   ├── useUser.ts                      # Fetch user profile from Firestore
│   ├── useFeed.ts                      # Feed posts with infinite scroll
│   ├── useDocuments.ts                 # Library documents with filters
│   └── useNotifications.ts
│
├── types/index.ts                      # All TypeScript interfaces
│
├── constants/
│   ├── departments.ts                  # ESUT departments list
│   ├── courses.ts                      # Course codes by department
│   └── levels.ts                       # 100L – 600L + PG
│
├── public/
│   ├── logo.png                        # 512×512 transparent
│   ├── favicon.png                     # 32×32 transparent
│   ├── apple-touch-icon.png            # 180×180
│   ├── og-image.png                    # 1200×630 default OG image
│   ├── manifest.json                   # PWA manifest
│   ├── robots.txt
│   └── sitemap.xml                     # Generated dynamically
│
├── DESIGN.md
├── CONTEXT.md                          # This file
└── .env.local
```

---

## 5. Environment Variables

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=esutsphere_uploads
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Email
GMAIL_USER=
GMAIL_APP_PASSWORD=

# App
NEXT_PUBLIC_APP_URL=https://esutsphere.vercel.app
SUPER_ADMIN_EMAIL=joshuaugwu89@gmail.com
```

> ⚠️ Never put `CLOUDINARY_API_SECRET` or any server secret in a `NEXT_PUBLIC_` variable.

---

## 6. User Roles

| Role | String | Who | Capabilities |
|------|--------|-----|--------------|
| Guest | `guest` | Unauthenticated visitors | Browse public content, view docs/blogs (no download/comment) |
| Pending | `pending` | Registered, not yet approved | Locked dashboard only |
| Student | `student` | Verified ESUT student | Full access: upload, react, comment, follow, download |
| Lecturer | `lecturer` | Verified ESUT lecturer | All student features + "Lecturer Upload" badge, can pin to course |
| Class Admin | `class_admin` | Course rep assigned by super admin | All student features + class admin panel for their dept/level |
| Super Admin | `super_admin` | Joshua / site owner | Everything — full system controls |

### Class Admin Assignment Flow
```
1. Super Admin visits /admin/users
2. Finds course rep account (must already be an approved student)
3. Clicks "Assign as Class Admin"
4. Modal: select Department + Level they manage
5. Firestore user doc updated:
   role → 'class_admin'
   classAdminDept → e.g. "Computer Science"
   classAdminLevel → e.g. "400L"
6. That user now sees a "Class Panel" section in their dashboard
7. Class Panel shows only pending approvals matching their dept + level
8. Class Admin approves → sets role: 'student', approvalStatus: 'approved'
   Class Admin rejects → sets approvalStatus: 'rejected', rejectionReason: string
9. Notification email auto-sent to student on both outcomes
```

---

## 7. Firestore Database Schema

### Collection: `users`
```typescript
interface User {
  uid: string;                     // Firebase Auth UID
  email: string;
  displayName: string;             // Real name, visible on profile
  username: string;                // @username — unique, lowercase, 3–20 chars, alphanumeric + underscore
  profilePicture: string;          // Cloudinary URL
  coverPhoto?: string;             // Cloudinary URL
  bio?: string;

  // Academic
  matricNumber: string;            // ESUT format: "2022/249671/CS"
  department: string;              // e.g., "Computer Science"
  faculty: string;                 // e.g., "Natural Sciences"
  yearOfEntry: string;             // e.g., "2022/2023"
  currentLevel: string;           // e.g., "400L" — auto-calculated

  // Auth
  role: 'pending' | 'student' | 'lecturer' | 'class_admin' | 'super_admin';
  approvalStatus: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  admissionLetterUrl: string;      // Cloudinary URL

  // Class Admin
  classAdminDept?: string;
  classAdminLevel?: string;

  // Social
  followersCount: number;
  followingCount: number;
  uploadsCount: number;
  totalLikesReceived: number;
  totalDownloads: number;

  // Gamification
  points: number;
  badges: string[];                // e.g., ['top_contributor', 'note_legend']

  // Meta
  isVerified: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  lastActiveAt: Timestamp;
}
```

### Collection: `documents`
```typescript
interface Document {
  id: string;
  title: string;
  description: string;
  fileUrl: string;                 // Cloudinary URL
  fileType: 'pdf' | 'docx' | 'pptx' | 'image' | 'audio';
  fileSizeKb: number;
  thumbnailUrl?: string;

  // Taxonomy
  contentType: 'notes' | 'past_questions' | 'research' | 'assignment' | 'seminar' | 'textbook' | 'handout' | 'project';
  department: string;
  faculty: string;
  courseCode: string;              // e.g., "CSC 466"
  courseName: string;              // e.g., "Organization of Programming Languages"
  level: string;                   // e.g., "400L"
  academicSession: string;         // e.g., "2024/2025"

  // Uploader
  uploaderId: string;
  uploaderName: string;
  uploaderUsername: string;
  uploaderAvatar: string;
  isLecturerUpload: boolean;

  // Engagement
  viewCount: number;
  downloadCount: number;
  likesCount: number;
  commentsCount: number;
  bookmarksCount: number;

  // Meta
  isPinned: boolean;
  isApproved: boolean;             // Default true — flag-to-remove system
  isFeatured: boolean;             // Super admin can feature
  tags: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### Collection: `posts` (Blog)
```typescript
interface Post {
  id: string;
  slug: string;                    // URL-friendly title slug
  title: string;
  coverImage?: string;
  excerpt: string;                 // First 160 chars of content
  content: string;                 // TipTap HTML
  readingTimeMinutes: number;
  category: 'campus_news' | 'academic' | 'tech' | 'career' | 'opinions' | 'lifestyle';
  tags: string[];
  authorId: string;
  authorName: string;
  authorUsername: string;
  authorAvatar: string;
  likesCount: number;
  commentsCount: number;
  viewCount: number;
  bookmarksCount: number;
  isPublished: boolean;
  isFeatured: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  publishedAt: Timestamp;
}
```

### Collection: `reactions`
```typescript
interface Reaction {
  id: string;
  userId: string;
  targetId: string;                // documentId or postId
  targetType: 'document' | 'post';
  reactionType: 'like' | 'love' | 'fire' | 'insightful' | 'funny';
  createdAt: Timestamp;
}
```

### Collection: `comments`
```typescript
interface Comment {
  id: string;
  targetId: string;
  targetType: 'document' | 'post';
  authorId: string;
  authorName: string;
  authorUsername: string;
  authorAvatar: string;
  content: string;
  parentCommentId?: string;        // Nested replies — 1 level deep ONLY
  likesCount: number;
  createdAt: Timestamp;
  isDeleted: boolean;
}
```

### Collection: `follows`
```typescript
interface Follow {
  id: string;                      // Format: `${followerId}_${followingId}`
  followerId: string;
  followingId: string;
  createdAt: Timestamp;
}
```

### Collection: `bookmarks`
```typescript
interface Bookmark {
  id: string;
  userId: string;
  targetId: string;
  targetType: 'document' | 'post';
  createdAt: Timestamp;
}
```

### Collection: `notifications`
```typescript
interface Notification {
  id: string;
  recipientId: string;
  senderId?: string;
  senderName?: string;
  senderAvatar?: string;
  type: 'new_follower' | 'reaction' | 'comment' | 'reply' | 'approval' | 'rejection' | 'mention' | 'download_milestone';
  message: string;
  targetId?: string;
  targetType?: string;
  isRead: boolean;
  createdAt: Timestamp;
}
```

### Collection: `reports`
```typescript
interface Report {
  id: string;
  reporterId: string;
  targetId: string;
  targetType: 'document' | 'post' | 'comment' | 'user';
  reason: 'spam' | 'wrong_info' | 'inappropriate' | 'copyright' | 'other';
  details?: string;
  status: 'pending' | 'resolved' | 'dismissed';
  createdAt: Timestamp;
}
```

### Collection: `search_index`
```typescript
// Firestore does NOT support native full-text search.
// Strategy: maintain a denormalized search_index collection.
// On document/post create or update → write a simplified search record.

interface SearchRecord {
  id: string;                      // Same as source document/post/user ID
  type: 'document' | 'post' | 'user';
  title: string;
  titleTokens: string[];           // Lowercase words for array-contains queries
  snippet: string;                 // First 120 chars of description/excerpt
  courseCode?: string;
  department?: string;
  level?: string;
  authorName: string;
  thumbnailUrl?: string;
  createdAt: Timestamp;
}

// Query example:
// query(collection(db, 'search_index'), where('titleTokens', 'array-contains', 'compiler'))

// Limitation: one keyword per array-contains query (Firestore rule)
// Multi-keyword: use array-contains-any with up to 30 tokens

// Scale note: if search quality becomes critical in Phase 3+,
// integrate Algolia (free tier: 10k searches/month) via Firestore triggers.
```

### Firestore Rules Summary
```
users:
  - read: anyone (public profiles)
  - write: owner only OR super_admin

documents:
  - read: any authenticated user
  - create: authenticated + approved users only
  - update/delete: owner OR super_admin

posts:
  - read: anyone (public)
  - create: authenticated + approved users
  - update/delete: owner OR super_admin

reactions, comments, bookmarks:
  - read: authenticated users
  - create: authenticated + approved users
  - delete: owner only

follows:
  - read: authenticated users
  - create/delete: followerId must equal current user

notifications:
  - read: recipient only
  - write: server-side API routes only

reports:
  - create: authenticated users
  - read/update: super_admin only

search_index:
  - read: any authenticated user
  - write: server-side only (API routes)
```

> ⚠️ **CRITICAL FIRESTORE NOTE:** All Firestore security rules MUST be manually published in the Firebase Console at `console.firebase.google.com → Firestore → Rules`. They CANNOT be deployed automatically via code. Always remind Joshua to do this after any rules change.

---

## 8. Notification Triggers

All notifications written server-side via `/api/notifications/route.ts`.

| Event | Type | Message Template | Recipient |
|-------|------|-----------------|-----------|
| User follows you | `new_follower` | `{senderName} started following you` | You |
| Reaction on your document | `reaction` | `{senderName} reacted {emoji} to "{title}"` | Uploader |
| Reaction on your post | `reaction` | `{senderName} reacted {emoji} to your post "{title}"` | Author |
| Comment on your document | `comment` | `{senderName} commented on "{title}"` | Uploader |
| Reply to your comment | `reply` | `{senderName} replied to your comment` | Commenter |
| Account approved | `approval` | `Your ESUTSphere account has been approved! Welcome 🎉` | You |
| Account rejected | `rejection` | `Your account was not approved. Reason: {reason}` | You |
| @mention in comment | `mention` | `{senderName} mentioned you in a comment` | Mentioned user |
| Document hits 100 downloads | `download_milestone` | `🎉 Your document "{title}" just hit 100 downloads!` | Uploader |
| Document hits 50 likes | `download_milestone` | `🔥 "{title}" reached 50 likes!` | Uploader |

---

## 9. Gamification Points System

| Action | Points | Notes |
|--------|--------|-------|
| Upload a document | +10 | On successful upload |
| Publish a blog post | +5 | On publish |
| Receive a like | +1 | Per unique reaction |
| Receive a comment | +2 | Per comment on your content |
| Receive a download | +3 | Per document download |
| Comment on content | +1 | You commenting (encourages engagement) |
| Daily login | +2 | Once per calendar day |
| Account first verified | +20 | One-time on first approval |
| First upload ever | +15 | One-time milestone |
| Reach 10 followers | +10 | One-time milestone |
| Reach 50 followers | +25 | One-time milestone |
| Document gets pinned by admin | +30 | One-time per pin |

### Auto-Badge Award Thresholds

| Badge | ID | Trigger |
|-------|-----|---------|
| Note Legend | `note_legend` | 10+ document uploads |
| Top Contributor | `top_contributor` | 500+ total points |
| Research King | `research_king` | 5+ research-type uploads |
| Popular | `popular` | 100+ followers |
| Viral Content | `viral_content` | Any single doc with 100+ downloads |
| Consistent | `consistent` | 7-day login streak |

---

## 10. Authentication Flow

### New User (Google Sign In)
```
1. Google Auth popup fires
2. Firebase Auth resolves
3. Check Firestore users collection for uid
4. No user doc → redirect to /onboarding/step-1
5. Doc exists + approvalStatus === 'approved' → redirect to /feed
6. Doc exists + approvalStatus === 'pending' → redirect to /onboarding/pending
7. Doc exists + approvalStatus === 'rejected' → login page + show rejection message with reason
```

### Onboarding Steps (New User Only)
```
Step 1: Academic Info
  Fields: matric number, department, faculty, year of entry
  Auto-calculate: currentLevel from yearOfEntry
  Validation: matricNumber regex /^\d{4}\/\d{6}\/[A-Z]{2,6}$/

Step 2: Profile Setup
  Fields: username (unique Firestore check), display name, bio (optional)
  Username: lowercase, 3–20 chars, alphanumeric + underscore only

Step 3: Admission Letter Upload
  File: image (JPG/PNG) or PDF, max 10MB
  Upload to: esutsphere/admission-letters/ on Cloudinary
  Progress bar during upload

Step 4: Submit
  Write user doc to Firestore: role='pending', approvalStatus='pending'
  Send email notification to class admin for their dept/level (if assigned)
  Redirect to /onboarding/pending

Pending screen:
  Shows: "Your account is under review"
  Shows: Expected time — 24–48 hours
  Shows: Matric number + department confirmation
  Allows: Update profile picture while waiting
```

### Protected Route Guard
```typescript
// Every (app) layout checks:
// 1. Authenticated? → else redirect /login
// 2. approvalStatus === 'approved'? → else redirect /onboarding/pending
// 3. Admin routes: role === 'super_admin' | 'class_admin'? → else 403
```

---

## 11. Cloudinary Configuration

```typescript
// Upload preset: esutsphere_uploads
// ALL uploads go through server-side /api/upload route
// NEVER call Cloudinary API directly from client components
// resource_type: 'auto' — handles PDF, DOCX, images in one preset

// File size limits
// Profile picture:    5MB  (image only)
// Document:          50MB  (PDF, DOCX, PPTX, image)
// Admission letter:  10MB  (PDF or image)
// Cover photo:        8MB  (image only)
// Blog cover:         5MB  (image only)

// Cloudinary folder structure
// esutsphere/profiles/           → profile pictures
// esutsphere/covers/             → cover photos
// esutsphere/documents/          → academic documents
// esutsphere/admission-letters/  → admission letters (private, restricted)
// esutsphere/blog-covers/        → blog post cover images
```

---

## 12. API Routes

| Route | Method | Purpose | Auth Required |
|-------|--------|---------|---------------|
| `/api/upload` | POST | Upload file to Cloudinary | Yes (student+) |
| `/api/send-email` | POST | Send notification/rejection email | Server-side only |
| `/api/notifications` | POST | Create notification document | Server-side only |
| `/api/search` | GET | Search documents, posts, users | Optional |
| `/api/admin/approve-user` | POST | Approve pending user | class_admin+ |
| `/api/admin/reject-user` | POST | Reject with reason string | class_admin+ |
| `/api/admin/assign-class-admin` | POST | Assign class admin role | super_admin only |

---

## 13. Email Templates

All emails sent via `/api/send-email` using Nodemailer + Gmail SMTP.

| Template ID | Trigger | Subject Line |
|-------------|---------|--------------|
| `welcome_pending` | After onboarding completion | "Your ESUTSphere account is under review" |
| `account_approved` | When approved by class/super admin | "You're in! Welcome to ESUTSphere 🎉" |
| `account_rejected` | When rejected with reason | "ESUTSphere account update" |
| `new_follower` | When someone follows (optional, user-toggleable) | "{name} followed you on ESUTSphere" |
| `weekly_digest` | Weekly cron (Phase 4) | "What's trending in your department this week" |

---

## 14. ESUT-Specific Constants

### Departments
```typescript
export const DEPARTMENTS = [
  "Computer Science",
  "Information Technology",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Architecture",
  "Medicine and Surgery",
  "Pharmacy",
  "Law",
  "Business Administration",
  "Accounting",
  "Economics",
  "Mass Communication",
  "Public Administration",
  // Add remaining ESUT departments from official portal
];
```

### Academic Levels
```typescript
export const LEVELS = ["100L", "200L", "300L", "400L", "500L", "600L", "PG"];
```

### Level Calculation from Year of Entry
```typescript
export function calculateLevel(yearOfEntry: string): string {
  const entryYear = parseInt(yearOfEntry.split('/')[0]);
  const currentYear = new Date().getFullYear();
  const yearsIn = currentYear - entryYear;
  const level = (yearsIn + 1) * 100;
  if (level >= 600) return "600L";
  if (level >= 500) return "500L";
  if (level >= 400) return "400L";
  if (level >= 300) return "300L";
  if (level >= 200) return "200L";
  return "100L";
}
// Example: 2022/2023 entry → 2026 → (2026-2022+1)*100 = 500L
```

### Matric Number Validation
```typescript
// ESUT format: "2022/249671/CS"
export const MATRIC_REGEX = /^\d{4}\/\d{6}\/[A-Z]{2,6}$/;
```

---

## 15. SEO Strategy

```typescript
// All public pages use Next.js 16 generateMetadata()

// Example: /library/[docId]/page.tsx
export async function generateMetadata({ params }: { params: { docId: string } }): Promise<Metadata> {
  const doc = await getDocument(params.docId);
  return {
    title: `${doc.title} — ESUTSphere`,
    description: doc.description.slice(0, 160),
    openGraph: {
      title: doc.title,
      description: doc.description,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/library/${params.docId}`,
      images: [doc.thumbnailUrl || '/og-image.png'],
      type: 'article',
    },
    twitter: { card: 'summary_large_image' },
  };
}

// Required static files in /public:
// og-image.png     → 1200×630px default OG image
// robots.txt       → allow all crawlers, block /admin and /dashboard
// sitemap.xml      → dynamically generated for all public docs + blog posts
```

---

## 16. PWA Configuration (Phase 4)

### public/manifest.json
```json
{
  "name": "ESUTSphere",
  "short_name": "ESUTSphere",
  "description": "The Academic Hub for ESUT Students",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#080810",
  "theme_color": "#7C3AED",
  "icons": [
    { "src": "/logo.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" },
    { "src": "/apple-touch-icon.png", "sizes": "180x180", "type": "image/png" },
    { "src": "/favicon.png", "sizes": "32x32", "type": "image/png" }
  ]
}
```

### app/layout.tsx metadata additions
```typescript
export const metadata: Metadata = {
  manifest: '/manifest.json',
  themeColor: '#7C3AED',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'ESUTSphere',
  },
};
```

---

## 17. Motion Animation Conventions

```typescript
// Standard page transition (use in every (app) page)
const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
};
const pageTransition = { duration: 0.3, ease: [0.16, 1, 0.3, 1] };

// Staggered list (feed, document grid)
const containerVariants = {
  animate: { transition: { staggerChildren: 0.06 } }
};
const itemVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

// Reaction pop (on click — spring bounce)
const reactionVariants = {
  tap: { scale: [1, 1.4, 0.9, 1], transition: { duration: 0.35 } }
};

// Always import from motion/react
import { motion, AnimatePresence } from "motion/react";
```

---

## 18. Component Conventions

### Naming
- Components: `PascalCase` (`DocumentCard.tsx`)
- Hooks: `camelCase` with `use` prefix (`useDocuments.ts`)
- Utilities: `camelCase` (`calculateLevel.ts`)
- Constants: `SCREAMING_SNAKE_CASE` (`DEPARTMENTS`)
- Types/Interfaces: `PascalCase` (`User`, `Document`, `Post`)

### Patterns
- All Firestore calls abstracted in `lib/firestore.ts` — NEVER raw Firestore calls inside components
- Cloudinary uploads ALWAYS through `/api/upload` server route — never expose API secret
- Loading states use Skeleton components — NEVER spinners on content areas
- Spinners ONLY on button submit actions (not page content)
- All forms use controlled inputs with local state
- `"use cache"` directive for any page that benefits from caching (Next.js 16)

### Path Aliases
```typescript
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';
import { DEPARTMENTS } from '@/constants/departments';
import type { User } from '@/types';
```

### tsconfig.json paths
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

## 19. Implementation Phase Plan

### Phase 1 — MVP (Core)
- [ ] Landing page (public, guest-accessible)
- [ ] Google Auth + multi-step onboarding
- [ ] Pending approval lockscreen
- [ ] Class Admin approval panel
- [ ] Super Admin approval panel
- [ ] Student dashboard (locked until approved)
- [ ] Document upload (PDF, DOCX, PPTX)
- [ ] Document library with filters (dept, course, level, type)
- [ ] Document view page with PDF preview
- [ ] Basic user profile page

### Phase 2 — Social Layer
- [ ] Follow / unfollow users
- [ ] 5-type reactions on documents and posts
- [ ] Comments + nested replies (1 level deep)
- [ ] Bookmarks / save
- [ ] Feed (For You + Following + Department tabs)
- [ ] Share to WhatsApp / Twitter / copy link
- [ ] In-app notification bell + panel
- [ ] Search (using `search_index` collection)

### Phase 3 — Blog & Discovery
- [ ] TipTap blog editor (write + publish)
- [ ] Blog listing + single post pages
- [ ] Trending tags + explore page
- [ ] Department leaderboard
- [ ] Gamification badges auto-awarded at thresholds

### Phase 4 — Polish & Scale
- [ ] Email notification templates (approval, new follower, digest)
- [ ] Admin analytics dashboard
- [ ] Content reporting + moderation queue
- [ ] PWA (manifest.json, installable on mobile)
- [ ] SEO (generateMetadata on all public pages, sitemap.xml)
- [ ] Skeleton loaders on all async content
- [ ] Infinite scroll on feed and library

---

## 20. What NOT to Do

| Rule | Reason |
|------|--------|
| ❌ No light mode | Dark-first permanently |
| ❌ No inline styles for colors | Use CSS variables from `@theme` in globals.css |
| ❌ No raw Cloudinary API calls from client | Always use `/api/upload` server route |
| ❌ No sensitive data (NIN, bank details) in Firestore | Privacy + security |
| ❌ No unprotected admin routes | Always role-check in layout.tsx |
| ❌ No `any` TypeScript type | Always define proper interfaces in `types/index.ts` |
| ❌ No API secrets in `NEXT_PUBLIC_` vars | Server secrets server-side only |
| ❌ Never forget to publish Firestore rules manually | Firebase Console → Firestore → Rules → Publish |
| ❌ No `tailwind.config.js` | Tailwind v4 is CSS-first — all config in `@theme` |
| ❌ No `@tailwind base/components/utilities` | v4 uses `@import "tailwindcss"` only |
| ❌ No blank white screen during loading | Skeleton loaders always |
| ❌ No hardcoded dept/course/level strings | Import from `constants/` |
| ❌ No full-text search directly on Firestore | Use `search_index` collection strategy |
| ❌ No `import from "framer-motion"` | Always `"motion/react"` |
| ❌ No `bg-gradient-to-r` in Tailwind | Use `bg-linear-to-r` (v4 rename) |
| ❌ No `flex-grow` / `flex-shrink` class | Use `grow` / `shrink` (v4 rename) |
| ❌ No raw Firestore calls inside components | All through `lib/firestore.ts` helpers |

---

## 21. Developer Info

| Item | Value |
|------|-------|
| **Builder** | Joshua Chimaobi Ugwu (Joshuazaza) |
| **Institution** | ESUT, Agbani, Enugu State, Nigeria |
| **Contact** | joshuaugwu89@gmail.com |
| **WhatsApp** | +2348161780381 |
| **AI Tools** | Claude (Anthropic), v0.dev, Antigravity IDE |
| **Deployment** | Vercel (auto-deploy from GitHub) |

---

*ESUTSphere CONTEXT.md — v2.0 — The complete project brief.*
*When in doubt about any decision on this project, refer back to this file first.*
