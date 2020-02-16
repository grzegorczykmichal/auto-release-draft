import * as core from '@actions/core'
import {run} from '../src/main'

jest.mock('@actions/core')

test('Should hmm', async () => {
  const fakeSetOutput = core.setOutput as jest.MockedFunction<
    typeof core.setOutput
  >
  await run()
  expect(fakeSetOutput).toHaveBeenCalledWith(
    'release-url',
    'http://release-url.com'
  )
})
