import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

export const RoutePage = () => {
    return (
        <div className="p-4">
            <Routes>
                <Route exact path="/">
                    <Navigate to="/search" />
                </Route>
            </Routes>
        </div>
    );
}
