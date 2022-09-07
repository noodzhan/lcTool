function addListener(eventName, callback) {
  if (!eventName) {
    window.addEventListener('ajaxReadyStateChange', function (e) {
      let xhr = e.detail;
      if (xhr.readyState == 4 && xhr.status == 200) {
        // xhr.getAllResponseHeaders()  响应头信息
        // xhr.requestHeader            请求头信息
        // xhr.responseURL              请求的地址
        // xhr.responseText             响应内容
        // xhr.orignUrl                 请求的原始参数地址
        // xhr.body                     post参数，（get参数在url上面）
        callback(xhr);
      }
    });
  }
  window.addEventListener(eventName, function (e) {
    let xhr = e.detail;
    if (xhr.readyState == 4 && xhr.status == 200) {
      // xhr.getAllResponseHeaders()  响应头信息
      // xhr.requestHeader            请求头信息
      // xhr.responseURL              请求的地址
      // xhr.responseText             响应内容
      // xhr.orignUrl                 请求的原始参数地址
      // xhr.body                     post参数，（get参数在url上面）
      callback(xhr);
    }
  });
}

export default addListener;
