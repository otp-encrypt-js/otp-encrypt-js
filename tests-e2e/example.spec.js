// @ts-check
import { test, expect } from '@playwright/test'
import LocalWebServer from 'local-web-server'

const portNumber = 3000
const ws = await LocalWebServer.create({
  port: portNumber,
  directory: 'tests/'
})

test('testng webserver', async ({ page }) => {
  await page.goto('/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/)
})

ws.server.close()
