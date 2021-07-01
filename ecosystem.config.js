module.exports = {
  apps : {
    // Entry point of the application
    script: './app.js',
    // A watcher on prod isn't really necessary as
    // the code should only be changed when the deployment
    // is run
    watch: '.'
  },

  deploy : {
    production : {
      // A password can be used but it is not recommended
      key : '~/.ssh/id_rsa',
      // Username of the account that owns the PM2 instance
      user : 'admmsk',
      // The local virtual machine hosting the application
      // If running 'pm2 deploy production --force' locally,
      // then change this to localhost
      host : 'pm2test', 
      // Branch to deploy
      ref  : 'origin/master',
      // Repository to deploy
      repo : 'https://github.com/MSK998/pm2test.git',
      // Where the repo files should be stored
      path : './prod/',
      // Commands to be run on the production server
      // during pm2 deploy production setup
      'pre-setup': '',
      // Commands to be run on the machine deploying
      'pre-deploy-local': '',
      // Commands to run on the production server before the repo gets cloned
      'pre-deploy': 'hostname',
      // Commands to run after the new code has been deployed
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js', 
    }
  }
};
