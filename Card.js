export default function Card(Props) {
    return (
        <div className="card" id = {Props.id}>
        <img src={Props.imgsrc} width="230" height="200" className="img" alt="image" />
        <div className="title">
         <b> Title :</b> <span>{Props.title}</span>
        </div>
        <a href={Props.link} target="blank">
          <button className ="btn">Watch now</button>
        </a>
      </div>
    )
}
