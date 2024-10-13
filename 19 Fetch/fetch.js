// fetch("https://api.github.com/users/ksubramanyeshwara")
//   .then((data) => {
//     return data.json();
//   })
//   .then((data) => {
//     console.log(
//       `GitHub username is ${data.name}, public repos are ${data.public_repos} Followers are ${data.followers}`
//     );
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/*
HTTP status codes 2xx (Success)  
*/
/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data.name);
  })
  .catch((error) => {
    console.log(error);
  });
*/

/*
rewriting abov fetch using async/await
*/
const githubUsernameElement = document.getElementById("github-username");
const publicReposElement = document.getElementById("public-repos");
const followersElement = document.getElementById("followers");
const pokemonNameElement = document.getElementById("pokemon-name");
async function fetchPokemon() {
  try {
    const response = await fetch(
      "https://api.github.com/users/ksubramanyeshwara"
    );
    if (!response.ok) {
      throw new Error("Pokemon not found");
    }
    const data = await response.json();
    githubUsernameElement.textContent = data.name;
    publicReposElement.textContent = data.public_repos;
    followersElement.textContent = data.followers;
  } catch (error) {
    console.error(error);
  }
}
fetchPokemon();
/*
HTTP status codes 4xx (Client errors)
*/

/* fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
  .then((response) => {
    // if (response.ok === false) {
    //   throw new Error("Pokemon not found");
    // } else {
    //   return response.json();
    // }
    if (!response.ok) {
      throw new Error("Pokemon not found");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.name);
  })
  .catch((error) => {
    console.log(error);
  });
  */

/*
  HTTP status codes 5xx (Server errors)
*/
/*
fetch("https://api.example.com") // Assume this URL causes a 500 Internal Server Error
  .then((response) => {
    if (!response.ok) {
      // 5xx error handling
      throw new Error(`Server error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => {
    // This block catches both server errors (thrown in the previous block) and network errors (like a timeout)
    console.error("Error is:", error);
  });
*/

/*
Network error
*/
// fetch("https://example.com/broken-endpoint")
//   .then((response) => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(`Netowrk Error ${response.status}`);
//     }
//     // handle response
//   })
//   .catch((error) => {
//     console.error(error); // Error: HTTP Error 500
//   });

/*
Creating UI by taking data from 3rd party API
*/

// ...

// const githubUsernameElement = document.getElementById("github-username");
// const publicReposElement = document.getElementById("public-repos");
// const followersElement = document.getElementById("followers");
// const pokemonNameElement = document.getElementById("pokemon-name");

// fetch("https://api.github.com/users/ksubramanyeshwara")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     githubUsernameElement.textContent = data.name;
//     publicReposElement.textContent = data.public_repos;
//     followersElement.textContent = data.followers;
//   })
//   .catch((error) => console.error(error));

// ...

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    pokemonNameElement.textContent = data.name;
  })
  .catch((error) => console.error(error));

// ...
