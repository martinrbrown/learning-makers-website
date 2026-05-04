import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  const logomarkData = readFileSync(join(process.cwd(), 'public/logomark.png'))
  const logomarkSrc = `data:image/png;base64,${logomarkData.toString('base64')}`

  // 60% of 180px canvas = 108px
  const logoSize = 108

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
        }}
      >
        <img
          src={logomarkSrc}
          width={logoSize}
          height={logoSize}
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    { ...size },
  )
}
