import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

describe('Button UI', () => {
  test('Button renders', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('Button renders with CLEAR theme', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  })
})
