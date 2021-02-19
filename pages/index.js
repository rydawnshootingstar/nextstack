import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import TextState, { textStateAtom } from '../components/textState'

export default function Home () {
  const [text, setText] = useRecoilState(textStateAtom)

  const onChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div>
      <input type='text' value={text} onChange={onChange} />

      <TextState />
    </div>

  )
}
