export default function createIteratorObject(report) {
  const result = [];
  for (const idx of Object.values(report.allEmployees)) {
    result.push(...idx);
  }
  return result;
}
