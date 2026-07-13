/**
 * Animated stat-block numbers. Per spec: ONLY resume-backed figures —
 * no invented revenue/quota numbers.
 * `value` is the numeric count-up target; prefix/suffix render around it.
 */
export const metrics = [
  {
    id: 'experience',
    value: 15,
    suffix: '+',
    label: 'Years of Sales Experience',
    context: 'Furniture · DTH · Apparel',
  },
  {
    id: 'connections',
    value: 1900,
    suffix: '+',
    label: 'DTH Connections Deployed',
    context: 'JACPL Power Plant & United Medicity Hospital',
  },
  {
    id: 'projects',
    value: 4,
    suffix: '',
    label: 'Major Institutional Projects Delivered',
    context: "St. John's Academy, Dwarka Hospital, Prayagraj High Court, NCR Railway/Airport",
  },
  {
    id: 'team',
    value: 150,
    suffix: '+',
    label: 'Employees Managed',
    context: 'HR operations, Tata Sky DTH',
  },
  {
    id: 'attrition',
    value: 12,
    suffix: '%',
    label: 'Reduction in Early Attrition',
    context: 'Tata Sky DTH',
  },
  // Revenue closed / quota attainment %: [NEEDS CLIENT INPUT] — omitted per spec.
];
