"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { lerConsentimento } from "@/lib/cookieConsent";

// IDs reais só existem depois de aprovado no AdSense / criar propriedade no GA.
// Preencher via variáveis de ambiente quando disponíveis.
const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function ConsentedScripts() {
  const [consentiu, setConsentiu] = useState(false);

  useEffect(() => {
    setConsentiu(lerConsentimento() === "aceito");
  }, []);

  if (!consentiu) return null;

  return (
    <>
      {ADSENSE_CLIENT_ID && (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}
    </>
  );
}
