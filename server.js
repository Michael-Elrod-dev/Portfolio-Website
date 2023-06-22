const express = require('express');
const bodyParser = require('body-parser');
const dialogflow = require('dialogflow');

// Create a new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath('YOUR_PROJECT_ID', 'YOUR_SESSION_ID');

const app = express();

app.use(bodyParser.json());

// Endpoint to handle the Dialogflow API calls
app.post('/chat', async (req, res) => {
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: req.body.text,
        languageCode: 'en-US',
      },
    },
  };

  try {
    let responses = await sessionClient.detectIntent(request);
    res.send(responses[0].queryResult.fulfillmentText);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(5000, () => console.log('Server is running on port 5000'));
