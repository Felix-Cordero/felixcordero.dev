import { noSilentNg } from '../../utils/process';
import { applyWtrBuilder } from '../../utils/web-test-runner';

export default async function () {
  // Temporary disable this test until we fix it.
  return;

  await applyWtrBuilder();

  const { stderr } = await noSilentNg('test');

  if (!stderr.includes('Web Test Runner builder is currently EXPERIMENTAL')) {
    throw new Error(`No experimental notice in stderr.\nSTDERR:\n\n${stderr}`);
  }
}
