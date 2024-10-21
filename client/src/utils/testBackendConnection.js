export const testBackendConnection = () => {
  fetch('http://localhost:5000/')
    .then(response => response.json())
    .then(data => console.log('Backend connection test:', data))
    .catch(error => console.error('Error connecting to backend:', error));
}