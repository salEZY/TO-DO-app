import { Header } from './layouts/Header'
import { Main } from './layouts/Main'
import { Footer } from './layouts/Footer'

const app = document.querySelector('#app')

app.appendChild(Header())
app.appendChild(Main())
app.appendChild(Footer())
