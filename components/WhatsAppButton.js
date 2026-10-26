import Image from "next/image";
import { createWhatsAppUrl } from "@/lib/whatsapp.mjs";

const defaultMessage =
  "Hello PlateHope Foundation, I found you through your website and would like to connect."
;

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={createWhatsAppUrl(defaultMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with PlateHope Foundation on WhatsApp"
    >
      <Image
        src="/images/whatsapp-contact.png"
        alt=""
        width={48}
        height={48}
      />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
