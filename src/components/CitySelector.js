import React, { useEffect } from "react"
import styled from "styled-components"

const Select = styled.select`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  
  &:hover {
    border-color: #888;
  }
  
  &:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 0 2px rgba(0,102,204,0.2);
  }
`

const CitySelector = ({ onSelectCity }) => {
  useEffect(() => {
    onSelectCity("singapore")
  }, [onSelectCity])

  return (
    <Select onChange={(e) => onSelectCity(e.target.value)} defaultValue="singapore">
      <option value="singapore">Singapore</option>
      <option value="hongkong">Hong Kong (incoming)</option>
      <option value="bangkok">Bangkok (incoming)</option>
    </Select>
  )
}

export default CitySelector
