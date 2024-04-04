import { useState } from 'react'

const SliderButton = (props: any) => {
  const [hover, setHover] = useState<boolean>(false)

  const handleEnter = () => {
    setHover(true)
  }

  const handleLeave = () => {
    setHover(false)
  }

  const bubbleStyleBackgroundColor = () => {
    if (props.currentIndex === props.index) {
      return props.color?.current
    } else if (hover) {
      return props.color?.hover
    }
    return props.color?.default
  }

  const bubbleScaleSize = () => {
    if (props.currentIndex === props.index) {
      return props.size?.current
    } else if (hover) {
      return props.size?.hover
    }
    return 1
  }

  return (
    <>
      <span
        className={`text-2xl mr-2 ${!hover ? 'hidden' : ''}`}
        style={{ color: props.text?.color }}
      >
        {`${props.text?.value.replace(/%i/g, () => `${props.index + 1}` )}`}
      </span>
      <button
        className={`rounded-full mr-auto my-auto mr-1`}
        // ${props.currentIndex === props.index && `scale-125 `}
        style={
          {
            backgroundColor: bubbleStyleBackgroundColor(),
            width: props.size?.default,
            height: props.size?.default,
            transform: `scale(${bubbleScaleSize()})`
          }
        }
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      />
    </>
  )
}

export default SliderButton