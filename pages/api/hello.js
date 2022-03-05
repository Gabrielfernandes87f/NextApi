// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


function handler(req, res) {

  res.statusCode = 200
  res.json({
    name: 'Gabriel fernandes',
    age: 34,
    hobbies: ['fotografias', 'patins', 'codar'],
  })
}


function tempo(request, response) {
  const dynamicDate = new Date();
  const date = dynamicDate.toLocaleDateString();
  const time = dynamicDate.toLocaleTimeString();
  const dateTime = `${date} ${time}`;
  response.statusCode = 200;


  response.json({
    dateTime,

  })

}

export default handler;



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