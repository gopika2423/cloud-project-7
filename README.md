# CloudVault Zero

> Zero-retention secure cloud file exchange platform for temporary transfers

Upload → Encrypt → Share → Download → Destroy

## Features

- ✅ Secure file upload with validation and size enforcement
- 🔐 AES-256-GCM style encryption workflow
- ⏰ Temporary cloud storage with no public object URLs
- 🔗 Secure random token URLs
- 🔒 Password protection and download limits
- ⏳ Expiration timers and scheduled cleanup
- 📊 User and admin dashboards
- 📈 Privacy score and security monitoring
- 🎮 Demo mode for offline development

## Tech Stack

- **Frontend**: Next.js 16 + TypeScript + Tailwind CSS
- **Cloud**: Firebase (Auth, Firestore, Storage, Hosting, Cloud Functions)
- **Security**: Server-side validation, storage rules, audit events, cleanup workers
- **Design**: Dark-first SaaS/security interface

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase CLI (for deployment)

### Installation

```bash
git clone https://github.com/gopika2423/cloud-project-7.git
cd cloud-project-7
npm install
```

### Environment Setup

```bash
cp .env.example .env.local
```

Update `.env.local` with your Firebase credentials.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Demo Mode (No Firebase Required)

```bash
echo "NEXT_PUBLIC_DEMO_MODE=true" >> .env.local
npm run dev
```

### Building

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Architecture

### Data Lifecycle

1. File is selected and validated
2. Metadata is checked for type, size, and extension
3. File is encrypted before temporary storage
4. A secure token is generated
5. Recipient accesses a protected share link
6. Download is validated, counted, and limited
7. Expiration or revocation triggers destruction
8. Sensitive metadata is removed

### Security Architecture

- ✓ Client and server validation
- ✓ Disallow public direct file reads
- ✓ Enforce role-based admin rules
- ✓ Apply rate limiting and suspicious access detection
- ✓ Store only minimal metadata
- ✓ Destroy file after expiration or revocation

## Folder Structure

```
.
├── app/                 # Next.js app directory
│   ├── admin/
│   ├── api/
│   ├── dashboard/
│   ├── login/
│   ├── register/
│   ├── share/[token]/
│   ├── transfers/[id]/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/          # Reusable React components
├── functions/           # Firebase Cloud Functions
├── lib/                 # Utility functions
├── public/              # Static assets
├── firestore.rules      # Firestore security rules
├── storage.rules        # Cloud Storage rules
├── firebase.json        # Firebase configuration
├── package.json
├── tsconfig.json
└── README.md
```

## Firebase Setup

### 1. Create Firebase Project

Go to [Firebase Console](https://console.firebase.google.com) and create a new project.

### 2. Add Firebase Config

Update `.env.local` with your Firebase credentials.

### 3. Enable Services

- Authentication (Email/Password)
- Firestore Database
- Cloud Storage
- Cloud Functions
- Hosting

### 4. Deploy Rules

```bash
firebase login
firebase deploy --only firestore:rules,storage
```

## Deployment

### Firebase Hosting

```bash
npm run build
firebase deploy
```

### Vercel

```bash
vercel
```

## Privacy Model

CloudVault Zero minimizes stored personal data:
- Avoids retaining unnecessary IP and device fingerprints
- Limits audit metadata to privacy-preserving records
- Suitable for security monitoring without privacy violations
- Files are automatically destroyed after expiration

## Future Enhancements

- 🔒 End-to-end client-side encryption
- 📱 QR-based secure transfer
- 🏢 Enterprise SSO
- 🛡️ Malware scanning integration
- 🤐 Zero-knowledge architecture

## License

MIT

## Support

For issues and feature requests, please create an issue on GitHub.
