//Goes through a string replaces whitespace with underscore
function makeURLfriendly(inputString: string): string {
  // Use a regular expression to match whitespace (spaces, tabs, newlines) and replace them with underscores
  return inputString.replace(/\s+/g, "_");
}

function capitalize(word: string): string {
  return word?.charAt(0)?.toUpperCase() + word?.slice(1);
}

export { makeURLfriendly, capitalize };
