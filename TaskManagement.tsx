import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Container, media, Row, Col} from 'styled-bootstrap-grid'
import {palette} from '../styled/colors'
import Cardmodal from '../components/modals/Cardmodal'
import {Flexed} from '../styled/shared'
import AddList from './Auth/AddList'
import {map} from 'jquery'

const TaskManagement = () => {
	const [showModal, setShowModal] = useState(false)
	const [cards, setCards] = useState<any>([])
	const [list, setList] = useState([{heading: 'abc'}, {heading: 'xyz'}])
	// const [mainCard, setMainCard] = useState<any>([])
	// const [QAcard, setQAcard] = useState<any>([])
	// const [Issue, setIssue] = useState<any>([])
	// const [Refrence, setRefrence] = useState<any>([])
	// const [cardDescription, setCardDescription] = useState<any>('')

	// const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null)

	// const addNewCard = () => {
	// 	const newCard = {
	// 		id: cards.length + 1,
	// 		title: 'New Card',
	// 		description: '',
	// 		image: ''
	// 	}
	// 	setCards((pre: any) => {
	// 		return [...pre, newCard]
	// 	})
	// 	setSelectedCardIndex(cards.length)
	// }
	// const AddMainCard = () => {
	// 	const NewMainCard = {
	// 		id: cards.length + 1,
	// 		title: 'New Card',
	// 		description: '',
	// 		image: ''
	// 	}
	// 	setMainCard((pre: any) => {
	// 		return [...pre, NewMainCard]
	// 	})
	// }
	// const addQaCard = () => {
	// 	const QaCard = {
	// 		id: cards.length + 1,
	// 		title: 'New Card',
	// 		description: '',
	// 		image: ''
	// 	}
	// 	setQAcard((pre: any) => {
	// 		return [...pre, QaCard]
	// 	})
	// }
	// const addIssueCard = () => {
	// 	const IssueCard = {
	// 		id: cards.length + 1,
	// 		title: 'New Card',
	// 		description: '',
	// 		image: ''
	// 	}
	// 	setIssue((pre: any) => {
	// 		return [...pre, IssueCard]
	// 	})
	// }
	// const addRefrenceCard = () => {
	// 	const RefrenceCard = {
	// 		id: cards.length + 1,
	// 		title: 'New Card',
	// 		description: '',
	// 		image: ''
	// 	}
	// 	setRefrence((pre: any) => {
	// 		return [...pre, RefrenceCard]
	// 	})
	// }
	// const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const file = e.target.files?.[0]
	// 	if (file) {
	// 		const reader = new FileReader()
	// 		reader.onload = () => {
	// 			const imageDataUrl = reader.result as string
	// 			setCards((prevCards: any) => {
	// 				const updatedCards = [...prevCards]
	// 				updatedCards[index].image = imageDataUrl
	// 				return updatedCards
	// 			})
	// 		}
	// 		reader.readAsDataURL(file)
	// 	}

	// 	setSelectedCardIndex(selectedCardIndex)
	// 	console.log(selectedCardIndex)
	// }

	// useEffect(() => {
	// 	console.log('cards', cards)
	// }, [cards])
	return (
		<>
			<Wrapper>
				<Section>
					{list?.map((list: any, index) => {
						return <AddList list={list} />
					})}
				</Section>
			</Wrapper>

			{showModal && <Cardmodal onCloseModal={() => setShowModal(false)} />}
		</>
	)
}

const Wrapper = styled.div`
	padding: 25px 20px;
`
const Section = styled.div`
	padding: 30px 15px;
	background: ${palette.white};
	border-radius: 10px;
	height: 40rem;
	width: 100%;
	display: flex;
	gap: 1rem;
	overflow: auto;
`

const Card = styled.div`
	margin-bottom: 0.3rem;
	height: 50%;
	width: 90%;
`

export default TaskManagement
