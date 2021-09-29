export default async function getLocation(address) {
  const API = `https://api.mymappi.com/v2/geocoding/direct?apikey=d3b594b4-d94b-4671-8bd9-3b8db1496958&q=${address}`;
  const response = await fetch(API);
  const request = await response.json();
  const { data } = await request;
  return data;
}
