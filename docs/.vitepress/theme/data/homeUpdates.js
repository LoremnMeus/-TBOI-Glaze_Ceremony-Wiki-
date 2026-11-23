/**
 * Homepage "Latest Updates" — generated at export / docs build time.
 * Do not hand-edit; run `node wiki/scripts/generate-home-updates.mjs`.
 */
import data from '../../../generated/home-updates.json'

export const homeUpdates = Array.isArray(data?.updates) ? data.updates : []
