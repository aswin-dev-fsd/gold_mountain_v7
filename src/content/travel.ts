/** Travel guidance shared by Home and Contact until journey estimates are confirmed. */
export const TRAVEL_OPTIONS = [
  {
    name: "Chennai International Airport (MAA)",
    shortName: "Chennai International (MAA)",
    icon: "flight",
    description: "Via Tindivanam. Contact us to plan your airport transfer and confirm the journey time for your arrival.",
  },
  {
    name: "Bengaluru International Airport (BLR)",
    shortName: "Bengaluru International (BLR)",
    icon: "flight",
    description: "Via Krishnagiri and Chengam. Contact us to plan your airport transfer and confirm the journey time for your arrival.",
  },
  {
    name: "Katpadi Junction",
    shortName: "Katpadi Junction (Railway)",
    icon: "train",
    description: "Arriving by train? Contact us for onward travel assistance from the railway station.",
  },
] as const;
