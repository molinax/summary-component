export const ContentSummary = ({title, paragraph}) => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-[800] text-dark-blue">{title}</h2>

      <p className="leading-6">{paragraph}</p>
    </div>
  )
}
