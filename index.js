/**
 * @typedef {import("./src/lib/base.js").User} User
 */

/**
 * @param {User[]} data
 * @param {string} query
 * @returns {User[]}
 */
function filter(data, query) {
  const search = query.toLowerCase();

  return data.filter(user => {
    return JSON.stringify(Object.values(user))
      .toLowerCase()
      .includes(search);
  });
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(filter(data, "cle").map(user => user.name));
  });