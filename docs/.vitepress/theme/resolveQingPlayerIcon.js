export function resolveQingPlayerIcon(key, iconCatalog, entryCatalog) {
  if (iconCatalog.qingPlayers?.[key]) return iconCatalog.qingPlayers[key]
  const character = (entryCatalog.entries || []).find((entry) => entry.kind === 'character' && entry.slug === key)
  const internalKey = character?.internalKey || key
  return iconCatalog.qingPlayers?.[internalKey] || null
}
