import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import First from './First'
import Second from './Second'
import LetConstVar from './pages/LetConstVar'
import RevisionLayout from './components/layouts/RivisionLayout'
import PageNotFound from './pages/PageNotFound'
import Layout from './components/layouts/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'

const MyRouters = () => {
    return (
        <BrowserRouter>
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
                    <Route path='*' element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRouters