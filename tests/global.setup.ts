import { test as setup } from '@playwright/test';

setup('global setup', async () => {
  console.log('From global setup - initialize project');
});