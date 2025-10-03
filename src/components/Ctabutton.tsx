import './Ctabutton.css'
export default function Ctabutton({ title, link }) {

	return (
		<button className={"cta-button"} onClick={() => console.log("Pakaipa lol")}>
			{title}
		</button>
	)

}
