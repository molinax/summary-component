import { useState } from "react"
import { SummaryPlan } from "./SummaryPlan"

export const SummaryPlans = () => {
  const [isPlanSelected, setIsPlanSelected] = useState(0)

  const planCollections = [
    {
      planType: "Annual",
      price: "59.99",
      id: 0,
    },
    {
      planType: "Monthly",
      price: "19.99",
      id: 1
    }
  ]

  const changePlan = (id) => {
    const currentValor = planCollections.find(plan => plan.id != id)
    setIsPlanSelected(currentValor.id)
  }

  return (
    <div className="w-full">
      {
        planCollections.map((plan) => {
          return plan.id === isPlanSelected && (
            <SummaryPlan
              key={plan.id}
              planType={plan.planType}
              price={plan.price}
              changePlan={changePlan}
              id={plan.id}
            />
          )
        })
      }
    </div>
  )
}
