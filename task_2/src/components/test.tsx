import { vi } from 'vitest'
import { render } from '@testing-library/react'
import { APP_ENDPOINTS } from '../constants'

import App from './App'

describe('<App />', () => {
  it('calls the api when mounted', async () => {
    const spy = vi.spyOn(window, 'fetch')
    render(<App />)
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith(APP_ENDPOINTS.SINGLE_PRODUCT)
  })
})
