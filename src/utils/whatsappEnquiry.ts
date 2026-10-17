const WHATSAPP_NUMBER = "918838198769";

const FIELD_LABELS: [string, string][] = [
  ["name", "Name"],
  ["email", "Email"],
  ["phone", "WhatsApp / phone"],
  ["dates", "Preferred dates"],
  ["guests", "Number of guests"],
  ["type", "Enquiry type"],
  ["message", "Message"],
];

export function getWhatsAppEnquiryUrl(form: HTMLFormElement, source: string): string {
  const data = new FormData(form);
  const details = FIELD_LABELS.flatMap(([name, label]) => {
    const value = data.get(name)?.toString().trim();
    return value ? [`${label}: ${value}`] : [];
  });
  const message = [
    "Hello Gold Mountain Wellness Resort, I would like to make an enquiry.",
    `Page: ${source}`,
    "",
    ...details,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
