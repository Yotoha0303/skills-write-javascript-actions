const https = require('https');

// 这里用一个公开的 Joke API
const url = 'https://official-joke-api.appspot.com/random_joke';

https.get(url, (resp) => {
  let data = '';

  // 数据分段接收
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // 接收完毕
  resp.on('end', () => {
    try {
      const joke = JSON.parse(data);
      console.log(`Here's a joke for you: ${joke.setup} - ${joke.punchline}`);
    } catch (err) {
      console.error('Failed to parse joke:', err);
    }
  });

}).on("error", (err) => {
  console.error("Error fetching joke: " + err.message);
});
