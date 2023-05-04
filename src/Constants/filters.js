export const filterData = [
  {
    key: 1,
    label: "Colour",
    name: "color",
    options: [
      { label: "Red", value: "Red" },
      { label: "Blue", value: "Blue" },
      { label: "Green", value: "Green" },
    ],
    type: "multiselect",
  },
  {
    key: 2,
    label: "Gender",
    name: "gender",
    options: [
      { label: "Men", value: "Men" },
      { label: "Woman", value: "Woman" },
    ],
    type: "multiselect",
  },
  {
    key: 3,
    label: "Price",
    name: "price",
    options: [
      { label: "0-Rs.250", value: { min: 0, max: 250 } },
      { label: "Rs.251-450", value: { min: 251, max: 450 } },
      { label: "Rs.450+", value: { min: 451, max: Infinity } },
    ],
    type: "range",
  },
  {
    key: 4,
    label: "Type",
    name: "type",
    options: [
      { label: "Polo", value: "Polo" },
      { label: "Hoodie", value: "Hoodie" },
      { label: "Basic", value: "Basic" },
    ],
    type: "multiselect",
  },
];
