// Mock data for demo mode

export const MOCK_TRANSFERS = [
  {
    id: '1',
    fileName: 'document.pdf',
    fileSize: 2048000,
    uploadedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    expiresAt: new Date(Date.now() + 22 * 60 * 60 * 1000),
    downloads: 2,
    maxDownloads: 5,
    token: 'abc123xyz789',
    isPasswordProtected: true,
  },
  {
    id: '2',
    fileName: 'presentation.pptx',
    fileSize: 5242880,
    uploadedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    expiresAt: new Date(Date.now() + 19 * 60 * 60 * 1000),
    downloads: 0,
    maxDownloads: 3,
    token: 'def456uvw012',
    isPasswordProtected: false,
  },
];

export const MOCK_AUDIT_LOGS = [
  {
    id: '1',
    event: 'FILE_UPLOADED',
    fileName: 'document.pdf',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    details: 'File encrypted and stored',
  },
  {
    id: '2',
    event: 'LINK_SHARED',
    fileName: 'document.pdf',
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
    details: 'Share link generated',
  },
  {
    id: '3',
    event: 'FILE_DOWNLOADED',
    fileName: 'document.pdf',
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    details: 'Downloaded by recipient',
  },
];
