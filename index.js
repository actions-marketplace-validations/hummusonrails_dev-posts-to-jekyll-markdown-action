const { Toolkit } = require('actions-toolkit')
const dotenv = require("dotenv");
dotenv.config();
const fetch = require("node-fetch");
const devurl = "https://dev.to/api/articles/me?page=1&per_page=6"

// Create variable to hold DEV Posts
let devPosts = [];

// Get Latest DEV Posts
// let headers = {
//   "Content-Type": "application/json",
//   "api-key": `${process.env.DEV_API_KEY}`
// }
// const getData = async devurl => {
//   try {
//     const response = await fetch(devurl, { method: 'GET', headers: headers});
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// };
// devPosts = getData(devurl);
// console.log(devPosts);

// Get date and title of latest blog post

// Count number of DEV posts

// Run your GitHub Action!
Toolkit.run(async tools => {
    // Print out the context in Actions dashboard
    console.log(tools.context);

    // Assign owner and repo data to variables
    const owner = tools.context.payload.repository.owner.login;
    const repo = tools.context.payload.repository.name;
    console.log(`THIS IS THE OWNER: ${owner} AND THIS IS THE REPO: ${repo}`);

    // Get contents of _posts folder
    let path = '_posts';
    const posts = (await tools.github.repos.getContents({
      owner,
      repo,
      path
    })).data;
    console.log(`HERE ARE THE POSTS: ${JSON.stringify(posts)}`);

    // Count the number of posts in repo posts folder 

    // Get the date and title of latest blog post in repo

    // Get the path to the last blog post in repo

    // Check to see if the repo posts folder has less posts than ${NUM_OF_POSTS} and count of DEV posts

    // If yes, raise a PR that adds x - ${COUNT OF POSTS IN REPO} num of DEV posts to repo as markdown files

    // If not, do nothing

    // Check to see if the latest DEV post is newer than the latest repo post

    // If yes, raise a PR that deletes the last blog post, 
    // adds a markdown file for the newest DEV post,
    // and increments the post num for the remaining posts by 1
    // (i.e. 2020-02-03-post-3 becomes 2020-02-03-post-4)

    // If not, do nothing


});
