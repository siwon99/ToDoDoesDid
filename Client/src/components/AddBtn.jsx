import Dropdown from "./Dropdown";

export default function AddBtn() {
  const [dropdownAdd, setdropdownAdd] = React.useState(true);

  return (
    <>
      <button className='addBtn' onClick={e => setdropdownAdd(!dropdownAdd)} onBlur={() => setdropdownAdd(false)}>
          {dropdownAdd ? '추가하기 ▲' : '추가하기 ▼'}
          <Dropdown visibility= {setdropdownAdd}>
            <ul>
              <li>프로젝트</li>
              <li>일정</li>
            </ul>
          </Dropdown>
        </button>
    </>
  )
}