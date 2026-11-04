export const site = {
  name: "Maria",
  email: "maria.zolotaya79@gmail.com",
  telegram: "Zolotaya79",
  telegramUrl: "https://t.me/Zolotaya79",
  /**
   * Публичный адрес сайта.
   * В лендинге фотографа (L_5) домен не указан: ни в config, ни в HTML, ни в истории git.
   * Когда хостинг будет привязан, задайте NEXT_PUBLIC_SITE_URL.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
} as const;

export function telegramHref(text: string) {
  return `${site.telegramUrl}?text=${encodeURIComponent(text)}`;
}

export function mailHref(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
