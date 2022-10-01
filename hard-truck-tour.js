function truckTour(petrolpumps) {
  let startpump;
  let petrol = 0;

  petrolpumps.forEach((pp, i) => {
      if (pp[0] >= pp[1] && !startpump) {
          startpump = i;
          petrol = pp[0] - pp[1];
      } else if (startpump) {
          petrol += pp[0] - pp[1];
          if(petrol < 0){
              startpump = null;
          }
      }
  });

  return startpump;
}