//added by kainat
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Col} from 'styled-bootstrap-grid'
import {GoPlus} from 'react-icons/go'
import DisplayCard from './DisplayCard'

const AddList = (list: any) => {
	const [showInput, setShowInput] = useState(false)
	const [showCard, setShowCard] = useState(false)
	const [newListTitle, setNewListTitle] = useState('')
	const [listTitle, setListTitle] = useState<any>('')
	const [finalList, setFinalList] = useState('')
	const [editMode, setEditMode] = useState(true)
	const addList = () => {
		setShowInput(true)
		setFinalList(finalList)
		console.log('new', newListTitle)
	}

	const handleInputChange = (e: any) => {
		setNewListTitle(e.target.value)
	}
	const handleOkayButtonClick = () => {
		setFinalList(listTitle)
		console.log('list', finalList)
	}
	const handleAddList = () => {
		console.log(newListTitle)
		setListTitle(newListTitle)
		setFinalList(finalList)
		setShowInput(false)
		setShowCard(true)
	}
	const addNewList = () => {
		const newList = {
			id: list.length + 1,
			title: 'New List',
			heading: '',
			image: ''
		}
		setListTitle((pre: any) => {
			return [...pre, newList]
		})
	}
	const handleEditButtonClick = () => {}
	return (
		<div>
			<Wrapper>
				{!showCard ? (
					<Cardstyling>
						{showInput ? (
							<Cards>
								<CardHeading onClick={handleOkayButtonClick}>{finalList}</CardHeading>
								{editMode ? (
									<input style={{margin: '0.3rem 0rem 0rem 0.6rem'}} type="text" value={newListTitle} onChange={handleInputChange} placeholder="Enter List Title" />
								) : (
									<div style={{margin: '0rem 0rem 0rem 0.6rem'}}>{newListTitle}</div>
								)}
								{editMode ? (
									<button
										style={{
											margin: '0.6rem 0rem 0rem 0.6rem',
											borderRadius: '5px',
											padding: '0.5rem',
											border: '1px solid black',
											backgroundColor: 'black',
											color: 'white'
										}}
										onClick={handleOkayButtonClick}>
										Add List
									</button>
								) : (
									<button
										style={{
											margin: '0rem 0rem 0rem 0.6rem',
											borderRadius: '5px',
											border: '1px solid black',
											backgroundColor: 'black',
											color: 'white'
										}}
										onClick={handleEditButtonClick}>
										Edit List
									</button>
								)}
							</Cards>
						) : (
							<AddListButton onClick={addList}>
								<GoPlus />
								<p>Add a list</p>
								<Cardpara onClick={addNewList}>{newListTitle}</Cardpara>
							</AddListButton>
						)}
					</Cardstyling>
				) : (
					<DisplayCard />
				)}
			</Wrapper>
		</div>
	)
}

const Wrapper = styled.div`
	width: 15rem;
`

const Cardstyling = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	min-height: auto;
	width: 100%;
	background-color: #efeeee;
	box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(132, 136, 138, 0.32) 0px 2px 16px 0px;
	transform: translateY(-5px);
	border-radius: 10px;
	margin: 0 0 0.7rem;
	position: relative;
	padding-bottom: 0.45rem;
`

const CardHeading = styled.div`
	font-size: 12px;
	padding: 4px 0;
	margin: 0;
	text-transform: uppercase;
	font-weight: bold;
`

const Cards = styled.div``
const Cardpara = styled.div`
	font-weight: bold;
`
const AddListButton = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
`

export default AddList
