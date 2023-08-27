export default function Home() {

  return (
    <div className="level search-flight">
        <div className="level-item">
            <input name="from" onChange={el => console.log(el)} className="search"></input>
        </div>
    </div>
  )
}
