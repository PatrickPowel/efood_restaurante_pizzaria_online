import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'

import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    {/* 🔗 Redux Provider englobando todo o App */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// Monitoramento de performance (mantém igual)
reportWebVitals()
