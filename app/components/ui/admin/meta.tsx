import {MouseEvent, useState} from 'react'
import {Button} from '~/components/modules/button'
import {InputText} from './input-text'

const MetaControls = () => {
  const [data, setData] = useState<string[]>([])
  const [count, setCount] = useState(0)
  const [subcount, setSubcount] = useState(0)

  const addItem = (e: MouseEvent) => {
    e.preventDefault()
    setCount(count + 1)
  }

  const addSubItem = (e: MouseEvent) => {
    e.preventDefault()
    setSubcount(count + 1)
  }

  // <label htmlFor="github" className="mb-1.5">
  //   github
  // </label>
  // <InputText name="github" onChange={onChange} />

  // {data && data.length > 0 &&
  //   data.map((item, i) => {
  //     return item && <div key={i}>{item.label}</div>
  //   })}

  console.log(data, 'data')
  console.log(count, 'count')

  return (
    <div>
      <Button onClick={addItem}>add item</Button>

      {count > 0 &&
        Array.from({length: count}).map((_, i) => {
          return (
            <div key={i} className="flex">
              <InputText />

              <div className="relative">
                <InputText />
                <Button onClick={addSubItem}>+</Button>
              </div>

              {subcount > 0 &&
                Array.from({length: subcount}).map((_, i) => {
                  return (
                    <div key={i} className="flex">
                      <InputText />
                      <InputText />
                    </div>
                  )
                })}
            </div>
          )
        })}
    </div>
  )
}

export default MetaControls
