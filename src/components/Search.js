/**
 * 通常ライフサイクルをもつClass Componentはstateを保持できるが
 * Functional Componentはstateを保持できない
 *
 * Hooksを使用しっているため、内部のstateを処理できるように
 */
import React, { useState } from "react"

const Search = (props) => {
  // state
  const [searchValue, setSearchValue] = useState("")

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value)
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault()
    props.search(searchValue)
    resetInputField()
  }

  return (
    <form className="search">
      <input value={searchValue} onChange={handleSearchInputChanges} type="text" />
      <input onClick={callSearchFunction} type="submit" value="SEARCH"/>
    </form>
  )
}

export default Search