const Urls = {
  'GET': 'https://26.javascript.pages.academy/kekstagram/data',
  'POST': 'https://26.javascript.pages.academy/kekstagram'
};

const sendRequest = (onSuccess, onError, method, body) => () => fetch(
  Urls[method],
  {
    method: method,
    body: body,
  },
)
  .then((response) => method === 'GET' ? response.json() : response)
  .then((response) => {
    if (!response.status || response.ok){
      onSuccess(response);
    } else {
      throw new Error(`${response.status} ${response.statusText}`);
    }
  })
  .catch((data) => {
    onError(data);
  });

export { sendRequest };
