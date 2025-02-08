const SecondaryButton = ({ content, styles, onClick }) => {
  return (
    <button className={`px-3 py-2 capitalize font-semibold border-primary border bg-primary rounded-md ${styles}`} onClick={onClick}>
      {content}
    </button>
  )
}

export default SecondaryButton