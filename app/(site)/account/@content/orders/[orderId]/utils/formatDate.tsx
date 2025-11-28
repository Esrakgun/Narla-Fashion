export const formatDate = (timestamp: {
  seconds: number;
  nanoseconds: number;
}) => {
  if (!timestamp) return "";

  const date = new Date(timestamp.seconds * 1000);
  return date.toLocaleString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
