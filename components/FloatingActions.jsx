import { site, waDefault } from '@/lib/site';

function WhatsAppIcon({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.03 5.33c-5.87 0-10.64 4.77-10.64 10.64 0 1.87.49 3.7 1.42 5.31L5.33 26.67l5.53-1.45a10.6 10.6 0 0 0 5.17 1.32h.01c5.86 0 10.63-4.77 10.63-10.64 0-2.84-1.1-5.51-3.11-7.52a10.56 10.56 0 0 0-7.53-3.05Zm0 19.15h-.01a8.83 8.83 0 0 1-4.5-1.23l-.32-.19-3.34.88.89-3.26-.21-.33a8.8 8.8 0 0 1-1.35-4.7c0-4.87 3.97-8.84 8.85-8.84 2.36 0 4.58.92 6.25 2.59a8.79 8.79 0 0 1 2.59 6.26c0 4.88-3.97 8.82-8.85 8.82Zm4.85-6.61c-.27-.13-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.19.28-.74.9-.91 1.09-.17.19-.34.2-.61.07-.27-.14-1.15-.43-2.18-1.36a8.16 8.16 0 0 1-1.51-1.88c-.16-.27-.02-.42.12-.56.13-.13.28-.34.42-.51.14-.17.19-.29.28-.48.1-.19.05-.36-.02-.5-.07-.14-.61-1.52-.84-2.07-.22-.54-.44-.47-.61-.48-.16 0-.34-.01-.53-.01-.19 0-.49.07-.75.34-.26.28-.98.96-.98 2.33 0 1.38 1 2.71 1.14 2.9.14.19 1.97 3.01 4.77 4.22.67.29 1.19.46 1.6.59.68.21 1.29.18 1.78.11.54-.08 1.65-.67 1.89-1.33.23-.65.23-1.21.16-1.33-.07-.12-.25-.19-.52-.32Z" />
    </svg>
  );
}

export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 print:hidden">
      <a
        href={`tel:${site.phoneIntl}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-goldlight shadow-lift sm:hidden"
        aria-label={`Call ${site.owner} on ${site.phone}`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8c1.1 2.2 2.9 4 5.1 5.1l1.7-1.7c.2-.2.5-.3.8-.2 1 .3 2 .5 3.1.5.4 0 .8.4.8.8V18c0 .4-.4.8-.8.8-7.3 0-13.3-6-13.3-13.3 0-.4.4-.8.8-.8h2.8c.4 0 .8.4.8.8 0 1.1.2 2.1.5 3.1.1.3 0 .6-.2.8l-1.9 2Z" />
        </svg>
      </a>

      <a
        href={waDefault}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 rounded-full bg-[#1FA855] py-2.5 pl-3 pr-4 text-white shadow-lift transition-transform hover:scale-[1.03]"
        aria-label="Chat on WhatsApp with Satyanarayan Property Dealer Jind"
      >
        <WhatsAppIcon />
        <span className="font-body text-sm font-semibold">WhatsApp</span>
      </a>
    </div>
  );
}

export { WhatsAppIcon };
