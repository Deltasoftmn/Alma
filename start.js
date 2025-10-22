const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Alma Chem Trade Website...\n');

// Start the backend server
const server = spawn('node', ['start-server.js'], {
  stdio: 'inherit',
  shell: true
});

// Start the frontend client
const client = spawn('npm', ['start'], {
  cwd: path.join(__dirname, 'client'),
  stdio: 'inherit',
  shell: true
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down servers...');
  server.kill();
  client.kill();
  process.exit(0);
});

server.on('error', (err) => {
  console.error('❌ Server error:', err);
});

client.on('error', (err) => {
  console.error('❌ Client error:', err);
});
