import player from './player.router';
import rival from './rival.router';

export default app => {
    app.use('/', player);
    app.use('/', rival);
}