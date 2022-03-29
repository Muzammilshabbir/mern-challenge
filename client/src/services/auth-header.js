export const authHeader = () => {
    const _token = localStorage.getItem("_token");
    // console.log('Token Called', _token);
    if (_token) {
      return { Authorization: "Bearer " + _token };
    }
  
    return {};
  };
  