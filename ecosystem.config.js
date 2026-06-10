module.exports = {
  apps: [
    {
      name: 'portfolio',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      cwd: '/home/ubuntu/repositories/next-portfolio',
      env: {},
      autorestart: true,
      listen_timeout: 10000,
      kill_timeout: 8000,
      max_restarts: 20,
      restart_delay: 2000
    }
  ]
}