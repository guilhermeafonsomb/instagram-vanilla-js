 const listImages = async () => {
  return fetch('https://picsum.photos/v2/list?page=2&limit=5')
    .then(response =>  response.json())
    .catch(err => {
      throw err
    })

};

export { listImages };

