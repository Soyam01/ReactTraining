import { Routes, Route, HashRouter } from 'react-router-dom'

import First from './First'
import Second from './Second'
import LetConstVar from './pages/LetConstVar'
import RevisionLayout from './components/layouts/RivisionLayout'
import PageNotFound from './pages/PageNotFound'
import Layout from './components/layouts/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'
import CounterPage from './pages/CounterPage'
import Classroom from './pages/Classroom'
import DataFetch from './hooks/DataFetch'
import Post from './hooks/Post'
import StorePage from './pages/StorePage'
import ReduxCounter from './pages/ReduxCounter'

const MyRouters = () => {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Layout />}>
                    {/* Landing page */}
                    <Route index element={<First />} />

                    <Route path="/second" element={<Second />} />

                    <Route path="/revision" element={<RevisionLayout />}>
                        <Route index element={<First />} />
                        <Route path="topic1" element={<LetConstVar />} />
                    </Route>

                    <Route path="/home" element={<HomePage />} />
                    <Route path='/About' element={<AboutPage />}/>
                    <Route path='/services' element={<ServicePage />}/>
                    <Route path='/contact' element={<ContactPage />}/>
                    <Route path='/counter' element={<CounterPage />}/>
                    <Route path="/classroom" element={<Classroom />} />
                    <Route path='/data' element={<DataFetch/>}/>
                    <Route path='/store' element={<StorePage/>}/>

                    <Route path='/post/:id'  element={<Post/>}/>
                    <Route path='reduxCounter' element= {<ReduxCounter/>}/>

                    <Route path='/post/*'  element={<PageNotFound/>}/>
                    <Route path='*' element={<PageNotFound />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default MyRouters