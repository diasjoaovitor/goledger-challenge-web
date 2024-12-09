import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Albums } from '.'

describe('<Albums />', () => {
  test('should render component', () => {
    render(<Albums />)
    expect(screen.getByText('Albums')).toBeInTheDocument()
  })
})
