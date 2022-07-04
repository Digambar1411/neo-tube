import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Computer Programming",
    description:
      "hitesh choudhary, code with harry,free code camp"
  },
  {
    _id: uuid(),
    categoryName: "news",
    description:
      "lallantop, bol bhidu"
  },
  {
    _id: uuid(),
    categoryName: "health awareness",
    description:
      "fit tuber"
  },
  {
    _id: uuid(),
    categoryName: "social awareness",
    description:
      "dhruv rathe"
  },
  {
    _id: uuid(),
    categoryName: "JavaScript",
    description:
      "akshay saini"

  },
  {
    _id: uuid(),
    categoryName: "law's",
    description:
      "labor law adviser"

  }
]
