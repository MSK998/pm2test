module.exports = {
  apps : {
    script: './app.js',
    watch: '.'
  },

  deploy : {
    production : {
      user : 'admmsk',
      host : 'pm2test', // The local virtual machine hosting the application
      ref  : 'origin/master',
      repo : 'https://github.com/MSK998/pm2test.git',
      path : './prod/',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ~/ecosystem.config.js',
      'pre-setup': ''
    }
  }
};
