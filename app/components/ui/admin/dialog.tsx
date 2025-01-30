import {TitleBar} from './title-bar'

export const Dialog = ({error}: {error?: string}) => {
  return (
    <div className="absolute bottom-10 right-10 z-50 flex flex-col items-center justify-center bg-silver p-[3px] shadow-window">
      <TitleBar className="w-full" title="error" error={Boolean(error)} />

      {error && <p className="m-1 text-xs">{error}</p>}
    </div>
  )
}

