'use client';

import Link from 'next/link';
import { Lock, Upload, Share2, Trash2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Navigation */}
      <nav className="border-b border-gray-700 bg-black/40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Lock className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-bold text-white">CloudVault Zero</span>
          </div>
          <div className="flex gap-4">
            <Link href="/login" className="text-gray-300 hover:text-white">
              Login
            </Link>
            <Link href="/register" className="btn-primary">
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Upload → Encrypt → Share → Destroy
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Zero-retention secure cloud file exchange. Limited time. No retention risk.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/dashboard" className="btn-primary text-lg px-6 py-3">
            Get Started
          </Link>
          <Link href="#features" className="btn-secondary text-lg px-6 py-3">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Features</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="card">
            <Upload className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Secure Upload</h3>
            <p className="text-gray-400">Validate and encrypt files before storage</p>
          </div>
          <div className="card">
            <Lock className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">AES-256 Encryption</h3>
            <p className="text-gray-400">Military-grade encryption for your files</p>
          </div>
          <div className="card">
            <Share2 className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Temporary Links</h3>
            <p className="text-gray-400">Secure token URLs with download limits</p>
          </div>
          <div className="card">
            <Trash2 className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Auto Destruction</h3>
            <p className="text-gray-400">Files automatically deleted after expiration</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 bg-black/40 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-400">
          <p>&copy; 2024 CloudVault Zero. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
