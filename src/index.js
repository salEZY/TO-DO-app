import { Header } from './layouts/Header'
import { Intro } from './components/Intro'
import { Main } from './layouts/Main'
import { Footer } from './layouts/Footer'

const app = document.querySelector('#app')

app.appendChild(Header())
app.appendChild(Intro())
app.appendChild(Main())
app.appendChild(Footer())
