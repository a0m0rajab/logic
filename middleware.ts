import { NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let locales = ['en', 'ar']

// Get the preferred locale, similar to above or using a library
function getLocale(request: { headers: Negotiator.Headers }) {
    let languages = new Negotiator(request).languages()
    // check if array of languages is [ "*" ]
    // if so, it means that the client accepts any language
    // so we return the default locale
    if (languages.length === 1 && languages[0] === '*') {
        languages = ['ar']
    }
    let defaultLocale = 'ar'
    console.log('languages', languages, locales, defaultLocale);
    return match(languages, locales, defaultLocale) 
}

export function middleware(request : {headers: Negotiator.Headers, nextUrl: URL, url: URL}) {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )
    
    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        console.log('locale', locale);
        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, request.url)
        )
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}