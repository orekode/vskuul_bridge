import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import * as Layout from "@/layouts"
import * as Pages from "@/pages"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout.Root />}>

        <Route index                element={<Pages.Home      />}     />
        <Route path="/courses"      element={<Pages.Courses   />}     />
        <Route path="/exams"        element={<Pages.Exams     />}     />
        <Route path="/contact"      element={<Pages.Contact   />}     />
        <Route path="/register"     element={<Pages.Register  />}     />
        <Route path="/schools"      element={<Pages.Schools   />}     />


      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
