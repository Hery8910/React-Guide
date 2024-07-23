import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { SideBar } from '../../components/SideBar'
import { fetchData } from '../../hooks/fetchData'
import { Component } from '../../components/Component';
import styles from "./ComponentPage.module.css"

export function ComponentPage() {
    const { data, loading, error } = fetchData('/components.json');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    
  return (
    <main className={styles.main}>
        <SideBar array={data}/>
        <Routes>
          <Route path="/" element={<Component data={data}/>} />
          <Route path="/:name" element={<Component data={data} />} />
        </Routes>
    </main>
  )
}

