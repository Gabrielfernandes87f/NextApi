// Next.js API route support: https://nextjs.org/docs/api-routes/introduction




async function tempo(request, response) {
  
  const dynamicDate = new Date();
  const date = dynamicDate.toLocaleDateString();
  const time = dynamicDate.toLocaleTimeString();
  const dateTime = `${date} ${time}`;
  response.statusCode = 200;

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
    dateTime,
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

export default tempo;



/* export default function handler(req, res) {
  git fetch origin master
  git merge origin/master
  git push origin master
}
  git = (git) => {
    const { exec } = require('child_process');
    exec(git, (err, stdout, stderr) => {
      if (err) {
        //some err occurred
        console.error(err)
        return;
      }
      console.log(stdout)
      console.log(stderr)
    })
  }
  git fetch origin master
  git merge origin/master
  git push origin master
  git.pull('origin', 'master', {}, function (err, update) {

    if (err) {
      console.log(err);
      res.status(500).json({
        message: 'Error pulling from remote repository',
        error: err
      });
    } else {
      console.log(update);
      res.status(200).json({
        message: 'Successfully pulled from remote repository',
        update: update
      });
    }
  });
} */