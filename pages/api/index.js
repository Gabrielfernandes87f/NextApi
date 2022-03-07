// Next.js API route support: https://nextjs.org/docs/api-routes/introduction




async function api(request, response) {
  
  const GitHubJson = await fetch('https://api.github.com/users/Gabrielfernandes87f');

  const gitResponse = await GitHubJson.json();
  const Name = gitResponse.name;
  const github = gitResponse.html_url;
  const Avatar = gitResponse.avatar_url;
  const Bio = gitResponse.bio;
  const Repos = gitResponse.public_repos;
  const Followers = gitResponse.followers;
  const Following = gitResponse.following;
  const Location = gitResponse.location;
  const Company = gitResponse.company;
  const Blog = gitResponse.blog;
  const Email = gitResponse.email;
  response.json({
    
    Name,
    Avatar,
    Bio,
    Repos,
    Followers,
    Following,
    Location,
    Company,
    Blog,
    github,
    Email,
  })

}

export default api;
