'use client';

import Link from 'next/link';
import Navbar from '@/components/navabar/navbar';
import Brand from '@/components/brand/brand';
import Button from '@/components/button/Button';
import { ROUTES } from '@/lib/routes';

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl py-12 sm:py-16 lg:py-20 text-center">
          {/* 404 Error Code */}
          <div className="mb-8">
            <h1 className="text-9xl sm:text-[120px] font-bold text-orange-500 leading-none mb-4">
              404
            </h1>
            <div className="h-1 w-24 bg-orange-500 mx-auto mb-6"></div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-archivo mb-4">
              Page Not Found
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-archivo leading-relaxed max-w-lg mx-auto">
              We couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Back to Home
              </Button>
            </Link>
            <Link href={ROUTES.PROPERTIES}>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Browse Properties
              </Button>
            </Link>
          </div>

          {/* Support Link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 font-archivo mb-3">
              Still having trouble?
            </p>
            <a 
              href="mailto:support@hostify.com"
              className="text-orange-500 font-semibold font-archivo hover:text-orange-600 transition-colors"
            >
              Contact our support team
            </a>
          </div>
        </div>
      </main>

      <Brand />
    </div>
  );
}
