const asin = Math.asin;
const cos = Math.cos;
const sin = Math.sin;
const sqrt = Math.sqrt;
const PI = Math.PI;

// radius of Earth
const R_in_meters = 6378137;
const R_in_km = 6371;
const R_in_miles = 3958.756;

const squared = x => x * x;
const toRad = x => (x * PI) / 180.0;
const hav = x => squared(sin(x / 2));

module.exports.distance = (a, b, units = "km") => {
  const aLat = toRad(a.latitude || a.lat);
  const bLat = toRad(b.latitude || b.lat);
  const aLng = toRad(a.longitude || a.lng || a.lon);
  const bLng = toRad(b.longitude || b.lng || b.lon);

  if (units == "mi") R = R_in_miles;
  else if (units == "m") R = R_in_meters;
  else R = R_in_km;

  const ht = hav(bLat - aLat) + cos(aLat) * cos(bLat) * hav(bLng - aLng);
  return 2 * R * asin(sqrt(ht));
};

module.exports.isNearby = (a, b, distance, units="km") => {
  let d = this.distance(a, b, units);
  return d <= distance ? d : false;
};