const blobPath = 'M250 20 C305 12 343 33 385 51 C432 72 462 100 467 149 C474 197 492 226 475 270 C462 311 473 362 436 401 C401 440 360 461 309 470 C255 481 217 474 171 465 C121 455 82 433 56 393 C34 358 31 321 22 274 C13 225 27 185 42 141 C55 100 79 68 122 49 C162 31 199 31 250 20 Z'

export default function HeroPortrait() {
  return (
    <svg className="hero-portrait" viewBox="0 0 500 500" role="img" aria-label="Portrait of Lulu Wilson" focusable="false">
      <defs>
        <clipPath id="hero-portrait-clip">
          <path d={blobPath} />
        </clipPath>
      </defs>
      <path d={blobPath} fill="#f6c66f" transform="translate(9 12)" />
      <image href="/pfp.jpg" x="0" y="0" width="500" height="500" preserveAspectRatio="xMidYMid slice" clipPath="url(#hero-portrait-clip)" />
      <path d={blobPath} fill="none" stroke="#f6c66f" strokeWidth="5" />
    </svg>
  )
}
