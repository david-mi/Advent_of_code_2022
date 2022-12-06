export function findLetterPriority(letter) {
  return letter === letter.toUpperCase()
    ? letter.charCodeAt() - 65 + 27
    : letter.charCodeAt() - 96;
}
