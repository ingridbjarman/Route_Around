const geometry = require('spherical-geometry-js');

function findCoordinates([lat,lng], distance) {

  var startPoint = new geometry.LatLng(lat,lng);

  var wayPointA = geometry.computeOffset(startPoint, distance/4, 45);
  var wayPointB = geometry.computeOffset(startPoint, distance/2.828, 0);
  var wayPointC = geometry.computeOffset(startPoint, distance/4, 315);

  newCoordinates = [wayPointA.toJSON(), wayPointB.toJSON(), wayPointC.toJSON()];
  return newCoordinates;
};

module.exports = findCoordinates;