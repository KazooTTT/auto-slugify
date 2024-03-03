import { MET } from 'bing-translate-api'
import slugify from 'slugify'

function shouldSlugify(str: string) {
  return !/^[a-zA-Z0-9-_]+$/.test(str)
}

function getSlugifyString(str: string) {
  return slugify(str, { lower: true, strict: true })
}

export default async function getSlugResult(str: string) {
  try {
    let toSlugifyStr = str
    if (shouldSlugify(str)) {
      const [res] = await MET.translate(str, null, 'en') as MET.MetTranslationResult[]
      toSlugifyStr = res.translations[0].text ?? str
      return getSlugifyString(toSlugifyStr)
    }
    return toSlugifyStr
  }
  catch (error) {
    return String(error)
  }
}
