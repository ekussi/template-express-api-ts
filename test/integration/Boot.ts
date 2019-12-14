import { log } from '../../src/core/Logger';

before(async () => {
  log.info('Test start');
});

after(async () => {
  log.info('Test finish');
});
