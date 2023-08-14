import '../styles/pokemon.css';

export default function Pokemon({ avatar, name }) {
	return (
		<div className="container">
			<figure>
				<img src={avatar} alt={name} />
				<figcaption>
					{name}
				</figcaption>
			</figure>
		</div>
	);
}
