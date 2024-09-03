function generateLink(string) {
  if (string === "Home" || string === "Products" || string === "Services") {
    return "";
  }
  let result = string.replace(/ /g, "-");
  result = result.toLowerCase();

  return result;
}
export default generateLink;
