import express, { Express, Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors';

const port = 8000;

const app: Express = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

app.post('/authenticate', async (req, res) => {
  const { username } = req.body;
  
  try {
    const response = await axios.put(
      'https://api.chatengine.io/users/',
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: {
          "private-key": Bun.env.CHAT_ENGINE_PRIVATE_KEY,
        }
      }
    );
    return res.status(response.status).json(response.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }

  return res.json({ username: username, secret: 'sha256...'});
})

app.get("/", (req: Request, res: Response) => {
  res.send("hello, world");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

