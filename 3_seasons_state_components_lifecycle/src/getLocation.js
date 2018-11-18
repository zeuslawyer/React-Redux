export default (context) => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // console.log(position.coords.latitude.toString().slice(1,10));
        context.setState({ latitude: position.coords.latitude });
      },

      err => console.log("ERROR in GEOLOCATION!  > > " + err.message)
    );
  };