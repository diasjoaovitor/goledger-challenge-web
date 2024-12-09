import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Playlists } from '.'

describe('<Playlists />', () => {
  test('should render component', () => {
    render(<Playlists />)
    expect(screen.getByText('Playlists')).toBeInTheDocument()
  })
})
