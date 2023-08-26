import iconMusic from '../assets/images/icon-music.svg'

export const SummaryPlan = ({ planType, price, id, changePlan }) => {
  return (
    <div className="flex justify-evenly bg-pale-blue py-3 rounded-2xl">
      <img
        src={iconMusic}
        alt="Icon Music"
        className="w-11 h-11 self-center"
      />

      <div className="text-md">
        <h4 className="text-dark-blue font-[800]">{planType} Plan</h4>
        <p>${price}/{planType === "Annual" ? "year" : "month"}</p>
      </div>

      <button
        className="font-[800] text-bright-blue self-center underline transition duration-150 hover:opacity-60"
        onClick={() => changePlan(id)}
      >
        Change
      </button>
    </div>
  )
}
