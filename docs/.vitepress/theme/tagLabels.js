/** Shared collectible tag labels — aligned with EID zh_cn transformation names where applicable. */
export const TAG_LABEL = {
  summonable: { zh: '可召唤', en: 'Summonable' },
  offensive: { zh: '攻击性', en: 'Offensive' },
  devil: { zh: '利维坦', en: 'Leviathan' },
  angel: { zh: '撒拉弗', en: 'Seraphim' },
  book: { zh: '书虫', en: 'Bookworm' },
  quest: { zh: '任务', en: 'Quest' },
  nogreed: { zh: '贪婪禁用', en: 'No greed' },
  noeden: { zh: '伊甸除外', en: 'No Eden' },
  lazarusshared: { zh: '拉萨路共享', en: 'Lazarus shared' },
  mushroom: { zh: '蘑菇头', en: 'Fun Guy' },
  baby: { zh: '连体', en: 'Conjoined' },
  syringe: { zh: '嗑药', en: 'Spun' },
  food: { zh: '食物', en: 'Food' },
  mom: { zh: '好的妈妈', en: 'Yes Mother?' },
  guppy: { zh: '嗝屁猫', en: 'Guppy' },
  fly: { zh: '别西卜', en: 'Beelzebub' },
  tech: { zh: '科技', en: 'Tech' },
  unique: { zh: '独特跟班', en: 'Unique familiar' },
  teardrop: { zh: '泪弹相关', en: 'Tears' },
  nolostbr: { zh: '游魂无长子名分', en: 'No Lost BR' },
  dead: { zh: '死灵', en: 'Dead' },
  poop: { zh: '拉了', en: 'Oh Crap' },
  stars: { zh: '星星', en: 'Stars' },
  battery: { zh: '电池', en: 'Battery' },
  bob: { zh: '鲍勃', en: 'Bob' },
}

export function tagLabel(tag, lang = 'zh') {
  const row = TAG_LABEL[tag]
  if (!row) return tag
  return lang === 'en' ? row.en : row.zh
}
