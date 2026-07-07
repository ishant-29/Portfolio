import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

function Char({
  char,
  progress,
  range,
}: {
  char: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.3, 1])
  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  )
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.45'],
  })

  const words = text.split(' ')
  const total = text.length
  let charIndex = 0

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wordIdx) => {
        const start = charIndex
        charIndex += word.length + 1 // account for the following space
        return (
          <span key={wordIdx}>
            <span className="inline-block">
              {word.split('').map((char, i) => {
                const globalIdx = start + i
                return (
                  <Char
                    key={i}
                    char={char}
                    progress={scrollYProgress}
                    range={[globalIdx / total, Math.min((globalIdx + 1) / total, 1)]}
                  />
                )
              })}
            </span>
            {wordIdx < words.length - 1 ? ' ' : ''}
          </span>
        )
      })}
    </p>
  )
}
