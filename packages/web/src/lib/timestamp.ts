import { formatDistanceStrict } from "date-fns";

export const humanTime = (dbTimestamp: string) =>
  formatDistanceStrict(new Date(dbTimestamp), new Date(), { addSuffix: true })
