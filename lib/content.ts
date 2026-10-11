// Content and configuration constants

export const SECURITY_FEATURES = [
  {
    id: 'upload',
    title: 'Secure Upload',
    description: 'Validate and encrypt files before storage',
  },
  {
    id: 'encryption',
    title: 'AES-256 Encryption',
    description: 'Military-grade encryption for your files',
  },
  {
    id: 'sharing',
    title: 'Temporary Links',
    description: 'Secure token URLs with download limits',
  },
  {
    id: 'destruction',
    title: 'Auto Destruction',
    description: 'Files automatically deleted after expiration',
  },
];

export const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB
export const DEFAULT_EXPIRATION_HOURS = 24;
export const DEFAULT_MAX_DOWNLOADS = 10;

export const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'text/plain',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];
