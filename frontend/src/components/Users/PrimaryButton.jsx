const PrimaryButton = ({ content, styles, icon }) => {
  return (
    <button className="bg-primary flex gap-2 items-center rounded-lg text-white text-sm font-medium px-3 py-2">
      {icon}
      {content}
    </button>
  )
}

export default PrimaryButton