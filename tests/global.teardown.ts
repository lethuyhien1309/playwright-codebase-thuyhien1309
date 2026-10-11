import { test as teardown } from '@playwright/test';

teardown('global teardown', async () => {
  console.log('From global teardown - removing resources');
});
