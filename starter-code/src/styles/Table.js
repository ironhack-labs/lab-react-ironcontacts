import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 2em;
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	width: 40%;
`;

export const CelebrityRow = styled(Row)`
	padding: 1em 0;
	margin: .6em 0;
	border: .1em solid #ff5470;
	border-radius: 1em;
	p {
		width: 20%;
		align-self: center;
		text-align: center;
	}
	p:first-child,
	p:last-child {
		width: 5%;
		margin: 0 .4em
	}
`;

export const Position = styled.p`
	background-color: ${props =>
		props.children === 1
			? 'rgba(255, 215, 0, .5)'
			: props.children === 2
				? 'rgba(192, 192, 192, .5)'
				: props.children === 3 ? 'rgba(188, 143, 143, .5)' : '#fff'};
	border: .1em solid;

	border-color: ${props =>
		props.children === 1
			? 'rgb(255, 215, 0)'
			: props.children === 2 ? 'rgb(192, 192, 192)' : props.children === 3 ? 'rgb(188, 143, 143)' : '#d1d1e9'};
	padding: .4em 0;
	border-radius: 50%;
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	img {
		width: 5em;
		border-radius: .5em;
		box-shadow: .1em .1em 0 #333;
	}
`;

export const TableHeader = styled(Row)`
    font-weight: bold;
    font-size: 1.5rem;
	border-bottom: .2em double #ff5470;
	margin-bottom: .4em;
`;
