module.exports = {
  apps: [
    {
      name: 'openwa',
      script: 'dist/main.js',
      cwd: './',
      instances: 'max', // Use all available CPUs
      exec_mode: 'cluster', // Enable clustering for better performance
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: './logs/production-error.log',
      out_file: './logs/production-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      min_uptime: '10s',
      max_restarts: 10,
    },
  ],
};
