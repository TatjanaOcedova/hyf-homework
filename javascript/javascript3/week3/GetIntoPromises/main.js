const classmatesList = document.getElementById("repositorie");

const userNames = ["TatjanaOcedova", "rebeccahockley", "Yuhongg"];
const url = [];
userNames.forEach((userName) =>
  url.push(
    fetch(`https://api.github.com/search/repositories?q=user:${userName}`)
  )
);

let users = () => {
  Promise.all(url)
    .then((response) => {
      return Promise.all(response.map((response) => response.json()));
    })
    .then((data) => {
      console.log(data);

      //creating an new array that contains all the item arrays
      let usersData = data.map((data) => data.items);
      usersData.forEach((e) => {
        const li = document.createElement("li");
        const repos = e;

        //creates the list that contains all the repositories for each user
        let usersRepos = "";
        repos.forEach(
          (repo) => (usersRepos += `<li> ${repo.name}: ${repo.html_url}</li>`)
        );

        li.innerHTML = `
                <li >${repos[0].owner.login}'s repositories</li>
                <ul>${usersRepos}</ul>
                `;
        classmatesList.append(li);
      });
    })
    .catch(function (error) {
      // if there's an error
      console.log(error);
    });
};
users();
