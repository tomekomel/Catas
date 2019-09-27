export function countSheeps(arrayOfSheep: any[]) {
  const filteredSheeps = arrayOfSheep.filter(sheep => sheep === true);

  return filteredSheeps.length;
}
