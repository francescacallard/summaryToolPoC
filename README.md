## Prerequisites

To run this app you will need:
- An OpenAI API Key
- An OpenAI Azure Endpoint

## Development

To run the app locally, follow these steps:

1. Install the dependencies using YARN:
   ```bash
   yarn install
   ```

2. Set up environment variables:
   - Copy `.example.env.local` to a new file `.env` in the server folder
   - Update with your API key and endpoint

3. Run the application:
   - Start the server:
     ```bash
     cd server
     yarn start
     ```
   - Start the client:
     ```bash
     cd client
     yarn dev
     ```

## Local Development URLs
- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:3000](http://localhost:3000)