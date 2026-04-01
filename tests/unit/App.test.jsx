import { render, screen } from '@testing-library/react'
import App from '../../src/app/App'

test('renderiza título principal', () => {
  render(<App />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Título')
})