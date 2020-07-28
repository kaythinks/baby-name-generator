import { boysNames as boys, girlsNames as girls } from "./babynames";

export const generateName = (name) => {
  if (name === "boy") {
    alert(
      `Your baby name is :- ${titleCase(
        boys[Math.round(Math.random() * boys.length)]
      )}, congrats!!!`
    );
  }

  if (name === "girl") {
    alert(
      `Your baby name is :- ${titleCase(
        girls[Math.round(Math.random() * girls.length)]
      )}, congrats!!!`
    );
  }
};

const titleCase = (name) => {
  return name.replace(/(^|\s)\S/g, function (letter) {
    return letter.toUpperCase();
  });
};
