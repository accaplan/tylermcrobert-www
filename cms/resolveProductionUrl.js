const isDev = process.env.NODE_ENV === 'development'
const projectUrl = isDev ? 'http://localhost:3000' : 'https://ashercaplan.com'

export default function resolveProductionUrl(document) {
  if (!document.slug) return null
  return `${projectUrl}/api/preview?slug=${document.slug.current}&type=${document._type}`
}
