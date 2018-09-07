function warn(warning) {

    window.alert(warning);
    capturedAlert();
  
  }

  function capturedAlert() {
  
    window.alert('An alert was called.');
  
  }