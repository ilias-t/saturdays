export default (method, url, cb) => {
  new XMLHttpRequest()
    request.onreadystatechange = () => { //event listener to track request's state
      if (request.readyState === 4) { //request state is set to complete
        cb(request.responseText)
      }
    }
    request.open(method, url) //initialize request
    request.send(null) //send request
  }
}