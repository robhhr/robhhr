import {toggleTheme} from '~/utils/toggle-theme'

export const ToggleTheme = () => {
  return (
    <div className="absolute top-4 right-4">
      <button onClick={() => toggleTheme()}>toggle theme</button>
    </div>
  )
}
