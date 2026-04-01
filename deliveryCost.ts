type PackageSize = "small" | "large";
type Workload = "very high" | "high" | "increased" | "normal";
type DeliveryOption = "insurance" | "express" | "weekend";
type DeliverySlot = [number, number]; // [startHour, endHour]

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

const deliveryOptionsCost: Record<DeliveryOption, number> = {
  insurance: 150,
  express: 200,
  weekend: 100,
};
const minCost = 400;

const getDistanceCost = (distance: number): number => {
  if (distance > 30) return 300;
  if (distance > 10) return 200;
  if (distance > 2) return 100;
  if (distance > 0) return 50;
  throw new Error("Distance must be greater than 0");
};

const getOptionsCost = (options: DeliveryOption[]): number =>
  options.reduce((sum, o) => sum + deliveryOptionsCost[o], 0);

const getSlotCost = (slot?: DeliverySlot): number => {
  if (!slot) return 0;
  const [start, end] = slot;

  if (start >= 22 || end <= 8)
    throw new Error("Delivery not allowed between 22:00 and 08:00");
  if (start >= 18 && end <= 22) return 120;
  return 0;
};

const calculateDeliveryCost = (
  distance: number,
  size: PackageSize,
  fragile: boolean,
  workload: Workload,
  options: DeliveryOption[] = [],
  slot?: DeliverySlot,
): number => {
  if (fragile && distance > 30) {
    throw new Error(
      "Fragile packages cannot be delivered over distances greater than 30 km",
    );
  }

  let cost = 0;
  cost += getDistanceCost(distance);
  cost += sizeCost[size];
  if (fragile) cost += 300;
  cost *= workloadCoefficients[workload];
  cost += getOptionsCost(options);
  cost += getSlotCost(slot);

  return Math.max(cost, minCost);
};

console.log(
  calculateDeliveryCost(5, "small", false, "normal", ["express", "insurance"]),
);
//console.log(calculateDeliveryCost(2, "small", false, "normal", [], [23, 1]));
console.log(calculateDeliveryCost(25, "small", true, "very high"));
console.log(calculateDeliveryCost(0, "small", true, "high"));
