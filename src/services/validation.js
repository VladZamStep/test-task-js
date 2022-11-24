export const isEmpty = (element) => {
    if (element.trim() === "") return true;
    else return false;
};

export const isNegative = (element) => {
    if (element < 0) return true;
    else return false;
};