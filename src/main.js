import 'dotenv/config';
import routes from 'src/routes';
import initializeServer from 'src/services/server';

const startServer = initializeServer(routes);

export default startServer;
