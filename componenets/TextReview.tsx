// @ts-nocheck
import Image from 'next/image'

function TextReview({ text, author }) {
  return (
    <div className="flex flex-col   box-shadow px-5   gap-4 pt-5">
      <div className="font-bold ">{author} :</div>
      <div className="overflow-auto">{text}</div>
      <div></div>
    </div>
  )
}

export default TextReview
