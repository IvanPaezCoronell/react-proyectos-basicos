import { useEffect, useState } from 'react';
import Pokemon from './Pokemon';
import '../styles/pokemon.css';
import Loader from './Loader';

export default function Pokemons() {
	const [pokemon, setPokemons] = useState([]);

	useEffect(() => {
		async function getPokemons(url) {
			let response = await fetch(url);
			let resJson = await response.json();

			console.log(response);
			resJson.results.map(async el => {
				let response = await fetch(el.url);
				let resJson = await response.json();

				let pokemon = {
					id: resJson.id,
					name: resJson.name,
					avatar: resJson.sprites.front_default,
				};

				setPokemons(pokemons => [...pokemons, pokemon]);
			});
		}

		return () => {
			getPokemons('https://pokeapi.co/api/v2/pokemon/');
		};
	}, []);

	return (
		<div className="container">
			{pokemon.length === 0
				? <Loader />
				: pokemon.map(el => <Pokemon key={el.id} avatar={el.avatar} name={el.name} />)}
		</div>
	);
}
