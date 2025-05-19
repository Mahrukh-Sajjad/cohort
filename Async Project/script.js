// function fetchUserProfile(username) {
//   return fetch(`https://api.github.com/users/${username}`).then((raw) =>
//     raw.json()
//   );
// }
// fetchUserProfile("async").then(function (data) {
//   console.log(data);
// });

// function getUserRepos(username) {
//   return fetch(`https://api.github.com/users/${username}/repos`).then((raw) =>
//     raw.json()
//   );
// }
// getUserRepos("asynchronousJavascriptor").then(function (data) {
//   console.log(data);
// });
let searchBtn = document.querySelector(".search");
let usernameinp = document.querySelector(".usernameinp");
let card = document.querySelector(".card");

function getProfileData(username) {
  return fetch(`https://api.github.com/users/${username}`).then((raw) => {
    console.log(raw);

    if (!raw.ok) throw new Error("user not found");
    return raw.json();
  });
}

function decorateProfileData(details) {
  console.log(details);
  let data = `<div class="flex flex-col md:flex-row items-center gap-6">
          <div class="w-24 h-24 rounded-full overflow-hidden shadow">
            <img
              src="${details.avatar_url}"
              alt="Octocat Avatar"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex-1">
            <h2 class="text-xl font-semibold text-gray-800">${details.name}</h2>
            <p class="text-gray-500">@${details.login}</p>
            <p class="mt-2 text-gray-600">
              ${details.bio}
            </p>

            <div
              class="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700"
            >
              <div><span class="font-semibold">Public Repos:</span> ${details.public_repos}</div>
              <div><span class="font-semibold">Followers:</span> ${details.followers}</div>
              <div><span class="font-semibold">Following:</span> ${details.following}</div>
              <div>
                <span class="font-semibold">Location:</span> ${details.location}
              </div>
              <div><span class="font-semibold">Company:</span> ${details.company}</div>
              <div>
                <span class="font-semibold">Blog:</span>
                <a
                  href="#"
                  target="_blank"
                  class="text-blue-600 hover:underline"
                >
                  ${details.blog}
                </a>
              </div>
            </div>
          </div>`;
  card.innerHTML = data;
}

function getRepos(username) {
  return fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`
  ).then((raw) => {
    if (!raw.ok) throw new Error("Failed to fetch repos...");
    return raw.json();
  });
}

// getRepos("async").then(function (data) {
//   console.log(data);
// });

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let username = usernameinp.value.trim();
  console.log(username);
  if (username.length > 0) {
    getProfileData(username).then((data) => {
      decorateProfileData(data);
    });
  } else {
    alert();
  }
});
