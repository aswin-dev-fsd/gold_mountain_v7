export const STAY_ROOMS = [
  {
    id: "deluxe",
    name: "Mountain View Deluxe",
    capacity: 2,
    description: "Our comfortable deluxe room offers direct views of the mountain. It features a king-size bed, air conditioning and a meal plan with breakfast and lunch.",
    amenities: ["Mountain View", "King-size Bed", "Air Conditioning", "Breakfast & Lunch"],
    prices: { INR: "₹3,099", USD: "$37", EUR: "€34" },
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
    reverse: false,
  },
  {
    id: "suite",
    name: "Mountain View Suite",
    capacity: 2,
    description: "A spacious suite with elevated mountain views and additional living space, perfect for longer stays. It features a king-size bed, premium amenities and a meal plan with breakfast and lunch.",
    amenities: ["Spacious Layout", "Mountain View", "King-size Bed", "Breakfast & Lunch"],
    prices: { INR: "₹4,099", USD: "$49", EUR: "€45" },
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    reverse: true,
  },
  {
    id: "family-suite",
    name: "Mountain View Family Suite",
    capacity: 4,
    description: "Our largest accommodation, designed for families or small groups. It offers multiple sleeping arrangements, expansive mountain views and full board for all guests (breakfast, lunch and dinner).",
    amenities: ["Family Layout", "Mountain View", "King-size Beds", "All Meals Included"],
    prices: { INR: "₹7,999", USD: "$95", EUR: "€89" },
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    reverse: false,
  },
] as const;

export const STAY_FAQS = [
  {
    question: "Which room is best for a couple?",
    answer: "The Mountain View Deluxe and the Mountain View Suite both host 2 guests with a king-size bed. Choose the Suite for extra living space and elevated views.",
  },
  {
    question: "Do you have rooms for families?",
    answer: "Yes. The Mountain View Family Suite hosts up to 4 guests with multiple sleeping arrangements and all meals included.",
  },
  {
    question: "Are meals included in the room rate?",
    answer: "The Deluxe and the Suite include breakfast and lunch. The Family Suite includes breakfast, lunch and dinner. All food is sattvic vegetarian.",
  },
  {
    question: "Is parking available?",
    answer: "Yes. Secure parking is available for guests at the resort.",
  },
  {
    question: "Can I book rooms for Karthigai Deepam or Pournami?",
    answer: "Yes, but festival and full moon dates are priced separately and fill early. Please enquire for rates and availability.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in is from 12:00 and check-out is until 12:00.",
  },
  {
    question: "Is the resort alcohol and smoke free?",
    answer: "Yes. Gold Mountain Wellness Resort is an alcohol-free and smoke-free property.",
  },
] as const;
