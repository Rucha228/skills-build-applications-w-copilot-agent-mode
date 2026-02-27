
// Dynamically set REACT_APP_CODESPACE_NAME if not set
if (!process.env.REACT_APP_CODESPACE_NAME) {
  const match = window.location.hostname.match(/^([^-]+)-8000\.app\.github\.dev$/);
  if (match) {
    process.env.REACT_APP_CODESPACE_NAME = match[1];
    console.log('Detected Codespace:', process.env.REACT_APP_CODESPACE_NAME);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
