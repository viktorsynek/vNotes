import Navbar from './Navbar'
import '../static/styles/main.css'

const Home = () => {
    return ( 
        <>
            <Navbar></Navbar>
            <div className="notes">
                <div className="note">
                    <h2 className='note-title'>title</h2>
                    <div className='note-line'></div>
                    <p className='note-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est ad iste omnis distinctio perferendis earum excepturi, doloremque modi eius similique corrupti ab hic saepe. Debitis officiis cupiditate quae itaque quibusdam illo. Quam illo unde facere! Odit officiis rem vel consequatur sapiente nam alias at mollitia non possimus explicabo quisquam, facere cum, expedita nihil qui magnam in autem perferendis cupiditate praesentium. Non odit, ex commodi atque quis fugit, consectetur pariatur nemo dolore quia id quo fugiat totam enim labore quam similique nihil, distinctio quasi suscipit facilis ea! Numquam laudantium alias recusandae. Velit odit cumque unde dolorum totam delectus blanditiis praesentium.</p>
                </div>
            </div>
        </>
     );
}
 
export default Home;