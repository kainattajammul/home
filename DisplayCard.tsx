import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Container, media, Row, Col} from 'styled-bootstrap-grid'
import {palette} from '../../styled/colors'
import {MdOutlineModeEditOutline} from 'react-icons/md'

import {GrAttachment} from 'react-icons/gr'
import {MdOutlineReadMore} from 'react-icons/md'
import {Flexed} from '../../styled/shared'
import Discription from './Discription'
import {GoPlus} from 'react-icons/go'
import {GoProjectTemplate} from 'react-icons/go'

const DisplayCard = () => {
	const [showModal, setShowModal] = useState(false)
	const [cards, setCards] = useState<any>([])
	const [cardDescription, setCardDescription] = useState<any>('')
	const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null)

	useEffect(() => {
		console.log('cards', cards)
	}, [cards])

	const addNewCard = () => {
		const newCard = {
			id: cards.length + 1,
			title: 'New Card',
			description: '',
			image: ''
		}
		setCards((pre: any) => {
			return [...pre, newCard]
		})
		setSelectedCardIndex(cards.length)
	}

	const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = () => {
				const imageDataUrl = reader.result as string
				setCards((prevCards: any) => {
					const updatedCards = [...prevCards]
					updatedCards[index].image = imageDataUrl
					return updatedCards
				})
			}
			reader.readAsDataURL(file)
		}

		setSelectedCardIndex(selectedCardIndex)
		console.log(selectedCardIndex)
	}

	return (
		<Cardstyling>
			{cards?.map((val: any, index: number) => {
				return (
					<Cardappend
						onClick={() => {
							if (val.image && val.description) {
								setShowModal(true)
							}
						}}>
						<CardImg key={index}>
							<label style={{margin: '0.3rem 0rem 0rem 0.6rem'}} htmlFor={`fileUpload${index}`}>
								Upload File
							</label>
							<input id={`fileUpload${index}`} style={{margin: '0.3rem 0rem 0rem 0.6rem', display: 'none'}} type="file" onChange={(e) => handleFileChange(index, e)} />
							{val.image && <StyledIcardimg src={val.image} alt="Selected Image" />}
							<Discription
								setCardDescription={setCardDescription}
								getDescription={(val: any) => {
									cards[index].description = val
								}}
							/>
							<Editicon>
								<MdOutlineModeEditOutline />
							</Editicon>
							<Cardicons>
								<MdOutlineReadMore style={{fontSize: '25px'}} />
								<GrAttachment style={{marginTop: '5px'}} />
							</Cardicons>
						</CardImg>
					</Cardappend>
				)
			})}
			<Flexed justify="flex-start" direction="row" align="center" gap={5} onClick={addNewCard} cursor="hand" margin="5px">
				<First justify="flex-start" direction="row" align="center">
					<GoPlus />
					<Cardpara>Add a Card</Cardpara>
				</First>
				<Sec>
					<GoProjectTemplate />
				</Sec>
			</Flexed>
		</Cardstyling>
	)
}
const First = styled(Flexed)``
const Sec = styled.div`
	margin-bottom: 1px;
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
	border-radius: 15px;
	margin: 0 0 10px;
	position: relative;
	padding-bottom: 0.45rem;
`

const Cardappend = styled.div`
	margin-bottom: 0.3rem;
	height: 50%;
	width: 90%;
`

const CardImg = styled.div`
	height: auto;
	width: 100%;
	padding-bottom: 0.2rem;
	background-color: white;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	border-radius: 10px;
	position: relative;
	border: 2px solid transparent;
	&:hover {
		/* transform: translateY(-5px); */
		border: 2px solid #0a209c;
	}
`
const Editicon = styled.i`
	position: absolute;
	top: 3px;
	right: 10px;
	color: #000;
	cursor: pointer;
	opacity: 0;
	transition: opacity 0.2s ease;

	${CardImg}:hover & {
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 1;
		background-color: #ededed;
		height: 25px;
		width: 25px;
		border-radius: 20px;
		box-shadow: 10 17px 15px #00000022;
	}
`
// const CardHeading = styled.div`
// 	font-size: 12px;
// 	padding: 11px 0;
// 	margin: 0;
// 	text-transform: uppercase;
// 	font-weight: bold;
// 	margin-left: 10px;
// `
const StyledIcardimg = styled.img`
	height: 50%;
	width: 100%;
	border-radius: 8px 8px 0 0;
	border: transparent;
	margin-right: 30px;
`
// const CardDescription = styled.div`
// 	margin-left: 10px;
// 	margin-top: 5px;
// 	height: auto;
// 	width: 90%;
// `
const Cardpara = styled.div``
const Cardicons = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 30%;
	height: auto;
	position: relative;
	top: 0.1rem;
`
const Icon = styled.div``
export default DisplayCard
