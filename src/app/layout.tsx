'use client';

import { appWithTranslation } from 'next-i18next';
import './globals.css';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"> {/* The language can be dynamically set by i18n */}
      <head>
        <title>GlobalCrest</title>
      </head>
      <body>
        {/* Layout wrapper */}
        {children}
      </body>
    </html>
  );
}

export default appWithTranslation(Layout);
