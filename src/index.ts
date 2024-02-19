import type { TranslationResult } from 'bing-translate-api'
import { translate } from 'bing-translate-api'
import slugify from 'slugify'

function shouldSlugify(str: string) {
  return !/^[a-zA-Z0-9-_]+$/.test(str)
}

function getSlugifyString(str: string) {
  return slugify(str, { lower: true, strict: true })
}

export async function getSlugResult(str: string) {
  try {
    let toSlugifyStr = str
    if (shouldSlugify(str)) {
      const { translation } = await translate(str, null, 'en') as TranslationResult
      toSlugifyStr = translation ?? str
      return getSlugifyString(toSlugifyStr)
    }
    return toSlugifyStr
  }
  catch (error) {
    return String(error)
  }
}
