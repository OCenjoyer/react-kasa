import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div className="error-container">
    <h1 className="error-number">404</h1>
    <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/" className="error-link-home">
      Retourner sur la page d’accueil
    </Link>
  </div>
);

export default ErrorPage;