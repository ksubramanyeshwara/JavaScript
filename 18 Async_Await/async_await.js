const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Subbu", age: 25, profession: "SDE" });
    } else {
      reject("ERROR: Couldn't fetch the data");
    }
  }, 2000);
});
// async/await doesn't handle error handle directly, so we need to use try/catch block to handle errors
async function getData() {
  try {
    const response = await fetchData;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
getData();

/*

*/
async function getGitHubData() {
  const githubDetails = await fetch(
    "https://api.github.com/users/ksubramanyeshwara"
  );
  //   adding .json() to the end of the fetch request will convert the response into a JSON object
  // adding await will wait for the response to be converted into a JSON object before moving on to the next line
  const details = await githubDetails.json();
  console.log(details);
}

getGitHubData();
