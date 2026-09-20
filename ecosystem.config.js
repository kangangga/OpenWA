module.exports = {
  apps: [
    {
      name: 'openwa',
      script: 'dist/main.js',
      cwd: './',
      instances: '1', // Use all available CPUs
      exec_mode: 'fork', // Enable clustering for better performance
      autorestart: true,
      watch: false,
      max_memory_restart: '3G',
      error_file: './logs/production-error.log',
      out_file: './logs/production-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      min_uptime: '10s',
      max_restarts: 10,
    },
  ],
};
