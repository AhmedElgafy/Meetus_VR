async function getChosen() {
  const res = await fetch("/data.json", {
    headers: {
      accept: "application/json",
      "User-agent": "learning app",
    },
  });
  const data = await res.json();
  //   console.log(data);
  return data;
}
async function getSuggestions() {
  const res = await fetch("/data.json", {
    headers: {
      accept: "application/json",
      "User-agent": "learning app",
    },
  });
  const { suggestions } = await res.json();
  //   console.log(data);
  return suggestions;
}
export { getSuggestions };
export default getChosen;
