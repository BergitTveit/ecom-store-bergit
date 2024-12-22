export type MainCategory = {
  name: string;
  tags: string[];
};

export const MAIN_CATEGORIES: MainCategory[] = [
  {
    name: "All",
    tags: [],
  },
  {
    name: "Electronics & Audio",
    tags: [
      "electronics",
      "audio",
      "headphones",
      "storage",
      "peripherals",
      "computers",
      "gaming",
      "wearables",
    ],
  },
  {
    name: "Fashion & Accessories",
    tags: [
      "fashion",
      "shoes",
      "bags",
      "glasses",
      "accessories",
      "watches",
      "jewelry",
    ],
  },
  {
    name: "Beauty & Personal Care",
    tags: ["beauty", "perfume", "skin care", "shampoo"],
  },
];
