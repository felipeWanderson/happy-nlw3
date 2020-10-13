import React from 'react';
import { Link } from 'react-router-dom'

import { FiArrowRight } from 'react-icons/fi';

import { Logo } from '../../assets/images'
import { PageLanding, ContentWrapper, Location } from './styles';

const Landing: React.FC = () => {
  return (
    <PageLanding>
      <ContentWrapper>
        <Logo />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>São Luís</strong>
          <span>Maranhão</span>
        </Location>

        <Link to="app">
          <FiArrowRight size={20} color="rgba(0,0,0,0.5)" />
        </Link>
      </ContentWrapper>
    </PageLanding>
  );
}

export default Landing;