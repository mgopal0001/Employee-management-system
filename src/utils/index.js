const checkIfMatching = (txt_1, txt_2) => {
  if (typeof txt_1 !== "string" || typeof txt_2 !== "string") {
    return false;
  }

  return txt_1.toLocaleLowerCase() === txt_2.toLocaleLowerCase();
};

export const findMatchingElements = (searchText, elements) => {
  return elements.filter((d) => checkIfMatching(d.name, searchText));
};
