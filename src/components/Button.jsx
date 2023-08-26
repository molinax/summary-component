export const Button = ({style = "fill", paragraph}) => {
  return (
    <button className={`py-[.9rem] rounded-2xl ${style === "outline" ? `font-[800] transition duration-150 hover:text-dark-blue` : `bg-bright-blue text-very-pale-blue transition duration-150 hover:opacity-80`}`}>
      {paragraph}
    </button>
  )
}
