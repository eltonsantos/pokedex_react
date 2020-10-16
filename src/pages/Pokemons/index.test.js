import React from 'react';

import { render } from '@testing-library/react';

import Pokemon from 'Pokemons';

describe('Tests for Pokemon page', () => {
  it('Render api when on load page', () => {
    // Renderizar o componente
    const { getByTestId } = render(<Pokemon/>)

  });
});