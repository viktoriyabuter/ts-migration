type PackageSize = "small" | "large";
type Workload = "very high" | "high" | "increased" | "normal";

const sizeCost: Record<PackageSize, number> = {
  small: 100,
  large: 200,
};

const workloadCoefficients: Record<Workload, number> = {
  "very high": 1.6,
  high: 1.4,
  increased: 1.2,
  normal: 1.0,
};

function calculateDeliveryCost(
  distance: number,
  size: PackageSize,
  fragile: boolean,
  workload: Workload,
): number {
  const minCost = 400;
  let cost = 0;

  if (fragile && distance > 30) {
    throw new Error(
      "Fragile packages cannot be delivered over distances greater than 30 km",
    );
  }

  if (distance <= 0) {
    throw new Error("Distance must be greater than 0");
  }

  if (distance > 30) {
    cost += 300;
  } else if (distance > 10) {
    cost += 200;
  } else if (distance > 2) {
    cost += 100;
  } else if (distance > 0) {
    cost += 50;
  }

  cost += sizeCost[size];

  if (fragile) cost += 300;

  cost *= workloadCoefficients[workload];

  return Math.max(cost, minCost);
}

console.log(calculateDeliveryCost(5, "small", false, "normal"));
console.log(calculateDeliveryCost(1, "large", true, "high"));
console.log(calculateDeliveryCost(25, "small", true, "very high"));
console.log(calculateDeliveryCost(0, "small", true, "high"));
