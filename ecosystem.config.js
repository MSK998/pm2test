module.exports = {
  apps : {
    script: './app.js',
    watch: '.'
  },

  deploy : {
    production : {
      user : 'admmsk',
      host : 'localhost',
      ref  : 'origin/master',
      repo : 'https://github.com/MSK998/pm2test.git',
      path : './prod/',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ~/ecosystem.config.js',
      'pre-setup': ''
    }
  }
};
