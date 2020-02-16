import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    core.setOutput('release-url', 'http://release-url.com')
  } catch (error) {
    core.setFailed(error.message)
  }
}

export {run}
