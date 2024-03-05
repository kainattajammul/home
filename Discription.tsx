import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import Cardmodal from '../../components/modals/Cardmodal'

const Discription = ({getDescription}: any) => {
	const [description, setDescription] = useState('')
	const [finalDescription, setFinalDescription] = useState('')
	const [editMode, setEditMode] = useState(true)

	const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(e.target.value)
	}

	const handleOkayButtonClick = () => {
		setFinalDescription(description)
		getDescription(description)

		setEditMode(false)
		console.log('Description:', description)
	}

	const handleEditButtonClick = () => {
		setEditMode(true)
	}

	return (
		<>
			<SectionDescription>
				{editMode ? (
					<input style={{margin: '0.3rem 0rem 0rem 0.6rem'}} type="text" value={description} onChange={handleDescriptionChange} placeholder="Enter a title for this card" />
				) : (
					<div style={{margin: '0rem 0rem 0rem 0.6rem'}}>{finalDescription}</div>
				)}

				{editMode ? (
					<button style={{margin: '0rem 0rem 0rem 0.6rem', borderRadius: '5px', border: '1px solid black', backgroundColor: 'black', color: 'white'}} onClick={handleOkayButtonClick}>
						Ok
					</button>
				) : (
					<button style={{margin: '0rem 0rem 0rem 0.6rem', borderRadius: '5px', border: '1px solid black', backgroundColor: 'black', color: 'white'}} onClick={handleEditButtonClick}>
						Edit
					</button>
				)}
			</SectionDescription>
		</>
	)
}

const SectionDescription = styled.div``
export default Discription
