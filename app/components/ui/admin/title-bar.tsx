export const TitleBar = ({title}: {title: string}) => {
  return (
    <div className="bg-title-bar py-[3px] pl-[3px] pr-0.5 font-ms-sans-serif text-xs font-bold text-white">
      {title}
    </div>
  )
}

