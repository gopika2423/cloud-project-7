# CloudVault Zero - Project Report

## Overview

CloudVault Zero is a zero-retention secure cloud file exchange platform designed to minimize retention risk by focusing on temporary file transfers with automatic deletion.

## Core Concept

**UPLOAD → ENCRYPT → SHARE → DOWNLOAD → DESTROY**

Unlike traditional cloud sharing platforms that prioritize permanence, CloudVault Zero emphasizes secure access, limited-time delivery, and automatic destruction.

## Key Features Implemented

### 1. Security Architecture
- **Server-side Validation**: All uploads validated before processing
- **AES-256-GCM Encryption**: Industry-standard encryption workflow
- **No Public URLs**: Files never accessible via direct URLs
- **Role-based Access Control**: Admin and user roles with distinct permissions
- **Rate Limiting**: Protection against abuse
- **Audit Logging**: Security monitoring without privacy violations

### 2. File Lifecycle Management
1. File selection and validation
2. Metadata checking (type, size, extension)
3. Encryption before storage
4. Secure token generation
5. Protected share link access
6. Download validation and limiting
7. Expiration-triggered destruction
8. Metadata cleanup

### 3. User Features
- Secure file upload with size enforcement
- Password protection for share links
- Download limits (configurable)
- Expiration timers (configurable)
- Transfer history and management
- Privacy-preserving audit logs

### 4. Admin Dashboard
- System monitoring
- User management
- Transfer monitoring
- Cleanup job status
- Security alerts
- Privacy score tracking

## Technology Stack

### Frontend
- **Next.js 16**: React framework with built-in optimization
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Lucide Icons**: Modern icon library
- **next-themes**: Dark mode support

### Backend & Cloud
- **Firebase Authentication**: Secure user management
- **Firestore Database**: Real-time document storage
- **Cloud Storage**: Encrypted file storage
- **Cloud Functions**: Serverless cleanup workers
- **Firebase Hosting**: Deployment platform

### Security
- **Firestore Rules**: Field-level security
- **Storage Rules**: Object-level access control
- **Environment Variables**: Secure config management
- **Validation**: Client and server-side validation

## Data Model

### Collections

#### transfers
```typescript
{
  id: string;
  uid: string;              // Owner user ID
  fileName: string;
  fileSize: number;
  mimeType: string;
  token: string;            // Unique share token
  password?: string;        // Optional password hash
  maxDownloads: number;
  downloadsCount: number;
  uploadedAt: timestamp;
  expiresAt: timestamp;
  isExpired: boolean;
  metadata: {
    checksum: string;
    uploadIp?: string;      // Privacy limited
    userAgent?: string;     // Privacy limited
  };
}
```

#### auditLogs
```typescript
{
  id: string;
  uid: string;
  transferId: string;
  event: 'UPLOAD' | 'DOWNLOAD' | 'SHARE' | 'DELETE' | 'EXPIRE';
  timestamp: timestamp;
  ipAddress?: string;       // Privacy limited
  details: string;
}
```

## Security Rules

### Firestore Rules
- Users can only read/write their own transfers
- Admin access to restricted collections
- Audit logs are append-only
- Time-based expiration enforcement

### Storage Rules
- No anonymous access
- Authenticated users only
- 100MB max file size
- Automatic cleanup on expiration

## Deployment Architecture

```
CloudVault Zero
├── Frontend (Next.js)
│   └── Firebase Hosting
├── Auth
│   └── Firebase Authentication
├── Database
│   └── Firestore
├── File Storage
│   └── Cloud Storage
├── Serverless Functions
│   └── Cloud Functions
└── CDN
    └── Firebase CDN
```

## Cleanup Strategy

### Scheduled Cleanup
- Cloud Function triggers hourly
- Finds expired transfers
- Deletes files from storage
- Removes Firestore documents
- Logs cleanup events

### Manual Deletion
- User can revoke access
- Immediate deletion of files
- Document marked as deleted

## Privacy Considerations

- **Minimal Data Storage**: Only essential metadata
- **No Fingerprinting**: Limited tracking data
- **Privacy-Preserving Logs**: Security monitoring without PII
- **Automatic Destruction**: No indefinite retention
- **GDPR Compliant**: Deletion on request

## Performance Optimizations

- **Lazy Loading**: Files loaded on-demand
- **Caching**: Secure caching strategies
- **CDN**: Global edge distribution
- **Compression**: File compression before storage
- **Async Processing**: Non-blocking cleanup

## Future Enhancements

### Phase 2
1. **Client-side Encryption**: Full E2E encryption
2. **QR Codes**: One-click sharing
3. **Batch Upload**: Multiple files support
4. **Preview**: File preview without download

### Phase 3
1. **Enterprise SSO**: SAML/OAuth integration
2. **Malware Scanning**: VirusTotal integration
3. **Webhooks**: Upload/download notifications
4. **API**: RESTful API for integrations

### Phase 4
1. **Zero-Knowledge**: True zero-knowledge architecture
2. **Blockchain**: Immutable audit trail
3. **Multi-region**: Global redundancy
4. **Mobile Apps**: iOS/Android native apps

## Testing Strategy

### Unit Tests
- Utility functions
- Encryption/decryption
- Token generation
- Validation functions

### Integration Tests
- Firebase emulator testing
- Upload/download flows
- Permission checks
- Cleanup workers

### E2E Tests
- User signup/login
- File upload workflow
- Share link access
- Expiration handling

## Monitoring & Alerts

### Metrics
- Upload/download rates
- Error rates
- File cleanup success
- Auth failures
- Storage usage

### Alerts
- High error rates
- Failed cleanups
- Storage quota warnings
- Security violations

## Conclusion

CloudVault Zero provides a modern, secure, and privacy-focused solution for temporary file transfers. By emphasizing zero-retention and automatic destruction, it addresses the core concern of traditional cloud sharing platforms: unnecessary retention risk.
