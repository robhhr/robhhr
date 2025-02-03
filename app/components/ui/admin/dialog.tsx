import {AnimatePresence, motion} from 'framer-motion'
import {TitleBar} from './title-bar'
import {useEffect, useState} from 'react'

export const FeedbackDialog = ({
  actionData,
}: {
  actionData?: {error?: string}
}) => {
  const [visible, setVisible] = useState(false)

  const transition = {
    duration: 0.5,
    ease: [0.19, 1, 0.22, 1],
    type: 'spring',
    bounce: 0.25,
  }

  useEffect(() => {
    if (actionData?.error) {
      setVisible(true)

      setTimeout(() => {
        setVisible(false)
      }, 2000)
    }
  }, [actionData])

  return (
    <AnimatePresence>
      {visible && actionData?.error && (
        <motion.div
          initial={{translateY: 100, opacity: 0}}
          animate={{translateY: 0, opacity: 1}}
          exit={{translateY: 100, opacity: 0}}
          transition={transition}
          // ensures unmount happens after exit animation
          onAnimationComplete={() => {
            if (!visible) {
              setVisible(false)
            }
          }}
          className="absolute bottom-10 right-10 z-50 flex flex-col items-center justify-center bg-silver p-[3px] shadow-window"
        >
          <TitleBar
            className="w-full"
            title="error"
            error={Boolean(actionData?.error)}
          />

          {actionData?.error && (
            <p className="m-1 text-xs">{actionData.error}</p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

