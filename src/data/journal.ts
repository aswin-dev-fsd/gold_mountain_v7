export interface JournalSection {
  heading: string;
  paragraphs: string[];
}

export interface JournalArticle {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  intro: string;
  sections: JournalSection[];
}

// NOTE: Article copy is draft text for client review and replacement.
export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "sacred-stillness-of-arunachala",
    category: "Spirituality",
    readTime: "5 min read",
    title: "The Sacred Stillness of Arunachala: An International Traveler's Guide",
    excerpt: "Navigating the sacred geography of Thiruvannamalai, the 14 km Girivalam circumambulation, and finding deep inner quietude.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBff-dHQjJQAfDdnhZGObNdgAyI99t0GtLb7EDVP8ojtklmgX19VnBjxrvfzMTbFI_6YDtEo2pe5WQUu_QrL9ZXSv9I9-BHBMSrhft4EA4KkMY9OJ7yzHM3WzDRx8z5-0gshMLTr1X3nJaYjy4zQTy841pu4luxHmWdjHLC9y9g-_3s_ex3SMNadJZef8QJ6j9B7a2hirBcLVNZYTaW2dE1CWLeofQEdLwxJnHdfzT1uFjErccSkRbp",
    intro: "Rising quietly above the plains of Tamil Nadu, Arunachala has drawn seekers for centuries. For travelers arriving from far away, the mountain can feel both welcoming and mysterious. This guide offers a gentle starting point.",
    sections: [
      {
        heading: "A mountain held sacred",
        paragraphs: [
          "Arunachala is revered across traditions as a presence rather than a place. Pilgrims, monks and curious travelers walk its slopes and temples in the same spirit of reverence, and visitors are invited to do the same: slowly, quietly and without hurry.",
        ],
      },
      {
        heading: "Walking the Girivalam",
        paragraphs: [
          "The Girivalam is the 14 km circumambulation of the mountain, usually walked barefoot and in silence. Many people choose the early morning or the evening, when the air is cool and the path is calm.",
          "Carry water, wear comfortable clothing, and let the pace be your own. There is no right way to walk it, only an unhurried one.",
        ],
      },
      {
        heading: "Finding inner quietude",
        paragraphs: [
          "The stillness people speak of here is rarely dramatic. It tends to arrive in small moments: a temple bell at dawn, the shade of an old tree, a meal eaten without a screen.",
          "Give yourself a few days before judging the experience. The mind needs time to slow down to the pace of the place.",
        ],
      },
      {
        heading: "Practical notes for first-time visitors",
        paragraphs: [
          "Dress modestly when visiting temples, carry small change, and check opening hours in advance. Our team can help arrange airport transfers, guided walks and local guidance during your stay.",
        ],
      },
    ],
  },
  {
    slug: "ayurveda-as-daily-rhythm",
    category: "Ayurveda",
    readTime: "7 min read",
    title: "Ayurveda as Daily Rhythm: Beyond Treatments to Wholesome Living",
    excerpt: "How Dinacharya (daily natural routine) harmonizes the biological clock and prevents imbalances before they arise.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAofNZqVnGVJzpaGvDlLSddXpowD08XVurhMktLFiO9MAIawNTe2m5F-qmtJb5-GXbPUG7moBCRYC8uZwCKxWOBYi_QSlDkZ5IvdOm_ED_i8atlnP9tu0EKclC1RTISXLMTtCWWJ-e6zOD6f6Il6aMpMhApasOoO4OU0hB7dnnfQrSL2FpjRT95HYxIZr7HMHCseBkVDfrsiZQhxLWngOaO-eAGsq1ZCYO48_OgBjQoaRsWBEHlpaH3",
    intro: "Ayurveda is often introduced through treatments such as massage and cleansing. Yet the tradition begins somewhere simpler: with how we spend an ordinary day.",
    sections: [
      {
        heading: "What is Dinacharya?",
        paragraphs: [
          "Dinacharya means daily routine. It describes a rhythm of waking, eating, working and resting that follows the natural cycles of the day, rather than working against them.",
        ],
      },
      {
        heading: "The shape of a balanced day",
        paragraphs: [
          "Rise early, before the day grows loud. Begin with warm water, gentle movement and a few minutes of stillness. Take the main meal when digestion is strongest, around midday, and keep the evening meal light.",
          "Wind down with lower light and less stimulation, so that sleep comes easily and rest is deep.",
        ],
      },
      {
        heading: "Prevention before cure",
        paragraphs: [
          "Classical texts place great emphasis on preventing imbalance. Small, consistent habits are considered more powerful than occasional intense efforts, which is why a routine matters more than any single treatment.",
        ],
      },
      {
        heading: "Bringing it home",
        paragraphs: [
          "A retreat is a chance to experience this rhythm without distraction. Many guests find that a few simple habits, such as regular mealtimes and a calm morning, are easy to carry back into everyday life. Our resident Ayurvedic doctors can suggest a routine suited to you.",
        ],
      },
    ],
  },
  {
    slug: "soil-to-plate-sattvic-garden-dining",
    category: "Nourishment",
    readTime: "4 min read",
    title: "From Soil to Plate: The Healing Power of Sattvic Garden Dining",
    excerpt: "Why food harvested within hours of consumption retains vibrant prana and supports physical and mental lightness.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQrVUbYJVSxbYoschzu5xitIOLTAaVU2aHAQOEVI0kk-ohlq8Th8hQ0AgNchZm20LLAlpUuBQg7ORspahMAnocuEkkSFATvUEn4cv0LS_tCQcor_3-C0BPpxK8PfF-T74cYxyljgxq7DaJKOsnP6Z6mZ6IOHK2kxN-NHc4ePFyPdoDG3QamzjezgFLryZQREUcB21g9hy-FPNzxnXSWycj411z-hKKaFBBtynqQjiKdHJh5OtIcN6t",
    intro: "In the Ayurvedic view, food is more than fuel. It shapes how we feel, how we think and how deeply we rest. Sattvic eating is built on that idea.",
    sections: [
      {
        heading: "What makes a meal sattvic?",
        paragraphs: [
          "Sattvic food is fresh, seasonal, vegetarian and prepared with care. It is meant to leave the body light and the mind clear, rather than heavy or restless.",
        ],
      },
      {
        heading: "The value of freshness",
        paragraphs: [
          "Produce picked close to the time it is eaten is considered to carry more vitality, known as prana. It also tastes better, which makes mindful eating far easier.",
        ],
      },
      {
        heading: "Herbs and spices as medicine",
        paragraphs: [
          "Everyday ingredients such as tulsi, ginger, cumin and turmeric are used for both flavor and balance. A warm herbal infusion after a meal is a simple example of food working as gentle medicine.",
        ],
      },
      {
        heading: "Eating with awareness",
        paragraphs: [
          "How we eat matters as much as what we eat. Sitting down, eating without distraction and chewing slowly help digestion and bring a quiet pleasure to the meal. We invite guests to bring that attention to every plate.",
        ],
      },
    ],
  },
];

/**
 * Finds a journal article by its URL slug.
 * @param slug - URL slug of the article.
 * @returns The matching article, or undefined if none exists.
 */
export function getArticle(slug: string): JournalArticle | undefined {
  return JOURNAL_ARTICLES.find((a) => a.slug === slug);
}
