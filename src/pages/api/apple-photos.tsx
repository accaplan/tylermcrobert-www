import { NextApiRequest, NextApiResponse } from 'next'

const URL = 'https://www.icloud.com/sharedalbum/#B0vJ8GySPGgDDbi'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const text = await fetch(URL).then(res => res.text())

  res.json({
    success: true,
    url: 'https://www.icloud.com/sharedalbum/#B0vJ8GySPGgDDbi',
    text,
  })
  return null
}
